angular.module('services.getlink', [])

.factory('getlink', ['db', '$q', function (db, $q) {
  var self = this;

  self.run = function () {
    return $q(function (resolve, reject) {
      // Get Selected channel and category on DB
      $q.all({
        channel: db.getBy('channel', 'checked', 'true'),
        category: db.getBy('category', 'checked', 'true')
      }).then(function (result) {
        var channel = result.channel,
          category = result.category,
          url = [];
        // Get source on DB
        db.get('source').then(function (result) {
          // Check source url
          result.forEach(function (source) {
            channel.forEach(function (channelItem) {
              category.forEach(function (categoryItem) {
                if (source.name == channelItem.name && source.category == categoryItem.name) {
                  url.push(source);
                }
              });
            });
            if (source.id == result[result.length - 1].id) {
              resolve(url);
            }
          });
        }, function (err) {
          console.log(err);
          reject(err);
        });
      }, function (err) {
        console.log(err);
        reject(err);
      });
    });
  }

  return self;
}])