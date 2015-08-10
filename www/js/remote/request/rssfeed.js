angular.module('request.rssfeed', [])

.factory('rssfeed', ['http', '$q', 'db', 'getlink', 'hurriyet', function (http, $q, db, getlink, hurriyet) {
  var self = this;

  self.run = function () {
    return $q(function (resolve, reject) {
      var count = 0,
        rssResponse = [];
      // Get Links
      getlink.run().then(function (url) {
        if (url.length != 0) {
          url.forEach(function (item) {
            // run all services
            rss(item).then(function (result) {
              count++;
              // Add response on array
              if (result.length != 0) {
                rssResponse.push({
                  name: item.name,
                  category: item.category,
                  language: item.language,
                  data: result
                });
                console.log(count + " - SUCCESS!! --  ", item.url);
              } else {
                console.log(count + " - FAILED!! --  ", item.url);
              }
              if (count == url.length) {
                // Clear news table
                db.remove('news').then(function (result) {
                  count = 0;
                  rssResponse.forEach(function (item) {
                    switch (item.name) {
                    case 'Milliyet':
                      count++;
                      if (count == rssResponse.length) {
                        resolve(true);
                      }
                      break;
                    case 'Hürriyet':
                      hurriyet.run(item).then(function (result) {
                        count++;
                        if (count == rssResponse.length) {
                          resolve(true);
                        }
                      }, function (err) {
                        console.log(err);
                        reject(err);
                      });
                      break;
                    }
                  });
                }, function (err) {
                  console.log(err);
                  reject(err);
                });
              }
            }, function (err) {
              console.log(err);
              reject(err);
            });
          });
        } else {
          db.remove('news').then(function(result) {
            resolve(result);
          }, function(err) {
            console.log(err);
            reject(err);
          });
          resolve([]);
        }
      }, function (err) {
        console.log(err);
        reject(err);
      });







      function rss(data) {
        return $q(function (resolve, reject) {
          http.run({
            url: data.url
          }).then(function (result) {

            switch (data.name) {
            case 'Milliyet':
              // TODO: 
              resolve([]);
              break;
            case 'Hürriyet':
              var JsonData = $.xml2json(result);
              if (angular.isDefined(JsonData) && angular.isDefined(JsonData.channel) && angular.isDefined(JsonData.channel.item)) {
                resolve(JsonData.channel.item);
              } else {
                resolve([]);
              }
              break;
            }
          }, function (err) {
            console.log(err);
            reject(err);
          })
        });
      }









    });
  }

  return self;
}]);