angular.module('modules.dash', [])

.controller('DashCtrl', ['$scope', 'rssfeed', 'db', '$cordovaInAppBrowser', '$rootScope', 'builder', 'loading', '$q', function ($scope, rssfeed, db, $cordovaInAppBrowser, $rootScope, builder, loading, $q) {
  $rootScope.infiniteScroll = false;
  init();

  // Only start one time
  function init() {
    loading.start();
    // Init DB
    db.init().then(function (result) {
      console.log('DB Loaded!');

      // Save Source and Category
      builder.run().then(function (result) {
        // Get channel on DB
        db.get('channel').then(function (result) {
          $rootScope.channel = result;
        });

        // Get category on DB
        db.get('category').then(function (result) {
          $rootScope.category = result;
        });

        rssFeed().then(function (result) {
          refreshData().then(function (result) {
            $rootScope.infiniteScroll = true;
          }, function (err) {
            console.log(err);
          });
        }, function (err) {
          console.log(err);
        });
      }, function (err) {
        console.log(err);
        loading.stop();
      });
    }, function (err) {
      console.log(err);
      loading.stop();
    });
  }

  // Refresh Data
  function rssFeed() {
    return $q(function (resolve, reject) {
      // Get and Save rssfeed News on service
      rssfeed.run().then(function (result) {
        if (result) {
          // RSS Success!!
          resolve('ok');
        } else {
          loading.stop();
          $scope.$broadcast('scroll.refreshComplete');
          reject(err);
        }
      }, function (err) {
        console.log(err);
        loading.stop();
        $scope.$broadcast('scroll.refreshComplete');
        reject(err);
      });
    });
  }

  function refreshData() {
    return $q(function (resolve, reject) {
      // Get rssfeed News on DB
      db.getByOrderDesc('news', 'name', 'Hürriyet', 'createdate').then(function (result) {
        $rootScope.news = result;
        loading.stop();
        $scope.$broadcast('scroll.refreshComplete');
        resolve('ok');
      }, function (err) {
        console.log(err);
        loading.stop();
        $scope.$broadcast('scroll.refreshComplete');
        reject(err);
      });
    });
  }

  function getLast20() {
    return $q(function (resolve, reject) {
      console.log('getLast20 is Run!');
      var lastDate = angular.isDefined($rootScope.news) && angular.isDefined($rootScope.news[$rootScope.news.length - 1]) ? $rootScope.news[$rootScope.news.length - 1].createdate : null;
      console.log(lastDate);
      if (lastDate !== null) {
        db.getByOrderDescOnDate('news', 'createdate', lastDate, 'createdate').then(function (result) {
          if (result.length != 0) {
            var count = 0;
            result.forEach(function (item) {
              count++;
              $rootScope.news.push(item);
              if (count == result.length) {
                console.log($rootScope.news.length);
                resolve(true);
              }
            });
          } else {
            resolve(false);
          }
        }, function (err) {
          console.log(err);
          reject(err);
        });
      } else {
        resolve(false);
      }
    });
  }

  $scope.doRefresh = function () {
    rssFeed().then(function (result) {
      refreshData();
    }, function (err) {
      console.log(err);
    });
  };

  $rootScope.loadMore = function () {
    getLast20().then(function (result) {
      console.log(result);
      $scope.$broadcast('scroll.infiniteScrollComplete');
      if (!result) {
        $rootScope.infiniteScroll = false;
      }
    }, function (err) {
      console.log(err);
      $scope.$broadcast('scroll.infiniteScrollComplete');
      $rootScope.infiniteScroll = false;
    });
  };

  // Go news page
  $scope.goPage = function (url) {
    console.log(url);

    var options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'yes'
    };

    document.addEventListener("deviceready", function () {
      console.log('deviceready');
      $cordovaInAppBrowser.open(url, '_blank', options).then(function (event) {
          // success
        })
        .catch(function (event) {
          // error
        });
    }, false);
  }

}])