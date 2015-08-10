angular.module('modules.menu', [])

.controller('MenuCtrl', ['$scope', 'db', '$rootScope', 'rssfeed', 'loading', '$ionicSideMenuDelegate', '$ionicScrollDelegate', function ($scope, db, $rootScope, rssfeed, loading, $ionicSideMenuDelegate, $ionicScrollDelegate) {
  $scope.leftMenuChanged = function (id, type) {
    loading.start();
    var value = type === "true" ? false : true;
    db.updateById('channel', ['checked'], [value], id).then(function (result) {
      db.get('channel').then(function (result) {
        $rootScope.channel = result;
        // Get and Save rssfeed News on service
        rssfeed.run().then(function (result) {
          if (result) {
            // Get rssfeed News on DB
            db.getByOrderDesc('news', 'name', 'Hürriyet', 'createdate').then(function (result) {
              $rootScope.news = result;
              $rootScope.infiniteScroll = true;
              loading.stop();
            }, function (err) {
              console.log(err);
              loading.stop();
            });
          } else {
            loading.stop();
          }
        }, function (err) {
          console.log(err);
          loading.stop();
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

  $scope.rightMenuChanged = function (id, type) {
    loading.start();
    var value = type === "true" ? false : true;
    db.updateById('category', ['checked'], [value], id).then(function (result) {
      db.get('category').then(function (result) {
        $rootScope.category = result;
        // Get and Save rssfeed News on service
        rssfeed.run().then(function (result) {
          if (result) {
            // Get rssfeed News on DB
            db.getByOrderDesc('news', 'name', 'Hürriyet', 'createdate').then(function (result) {
              $rootScope.news = result;
              $rootScope.infiniteScroll = true;
              loading.stop();
              $ionicScrollDelegate.scrollTop();
            }, function (err) {
              console.log(err);
              loading.stop();
            });
          } else {
            loading.stop();
          }
        }, function (err) {
          console.log(err);
          loading.stop();
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
}])