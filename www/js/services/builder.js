angular.module('services.builder', [])

.factory('builder', ['$q', 'db', 'channel', 'category', 'source', function ($q, db, channel, category, source) {
  var self = this;

  self.run = function () {
    return $q(function (resolve, reject) {
      var channelData = channel,
          categoryData = category,
          sourceData = source;

      checkBuilder().then(function (result) {
        if (result == null) {
          $q.all({channel: saveChannel(channelData), category: saveCategory(categoryData), source: saveSource(sourceData)}).then(function (result) {
            db.update('config', 'builder', true).then(function(resulve) {
              resolve('Builder Success!');
            }, function(err) {
              console.log(err);
              console.log('Update Failed for Config!');
              reject(err);
            });
          }, function (err) {
            console.log(err);
            console.log('Builder Failed!');
            reject(err);
          });
        } else {
          resolve(result);
        }
      }, function (err) {
        console.log(err);
        reject(err);
      });
    });
  }

  function checkBuilder() {
    return $q(function (resolve, reject) {
      db.get('config').then(function (result) {
        resolve(result[0].builder);
      }, function (err) {
        console.log(err);
        reject(err);
      });
    });
  }

  function saveChannel(channelData) {
    return $q(function (resolve, reject) {
      if (channelData.length != 0) {
        db.save('channel', ['id', 'name', 'checked'], [db.UUID(), channelData[0].name, channelData[0].checked]).then(function (result) {
          channelData.splice(0, 1);
          resolve(saveChannel(channelData));
        }, function (err) {
          console.log(err);
          reject(err);
        });
      } else {
        resolve('channel save success!');
      }
    });
  }

  function saveCategory(categoryData) {
    return $q(function (resolve, reject) {
      if (categoryData.length != 0) {
        db.save('category', ['id', 'name', 'checked'], [db.UUID(), categoryData[0].name, categoryData[0].checked]).then(function (result) {
          categoryData.splice(0, 1);
          resolve(saveCategory(categoryData));
        }, function (err) {
          console.log(err);
          reject(err);
        });
      } else {
        resolve('category save success!');
      }
    });
  }
  
  function saveSource(sourceData) {
    return $q(function(resolve, reject) {
      if (sourceData.length != 0) {
        db.save('source', ['id', 'name', 'language', 'category', 'url'], [db.UUID(), sourceData[0].name, sourceData[0].language, sourceData[0].category, sourceData[0].url]).then(function(result) {
          sourceData.splice(0, 1);
          resolve(saveSource(sourceData));
        }, function(err) {
          console.log(err);
          reject(err);
        });
      } else {
        resolve('source save success!');
      }
    });
  };

  return self;
}])