angular.module('parsers.hurriyet', [])

.factory('hurriyet', ['$q', 'db', 'dateParser', function ($q, db, dateParser) {
  var self = this;

  self.run = function (news) {
    return $q(function (resolve, reject) {
      var count = 0;
      news.data.forEach(function (item) {
        saveData(item, news.name, news.category, news.language).then(function (result) {
          count++;
          if (count == news.data.length) {
            resolve(' News Added! ' + news.name + ' ' + news.category + '');
          }
        }, function (err) {
          console.log(err);
          reject(err);
        });
      });


      function saveData(news, name, category, language) {
        return $q(function (resolve, reject) {
          if (
            typeof news.title !== 'undefined' &&
            news.title !== null &&
            news.title !== '' &&
            typeof news.thumbnail !== 'undefined' &&
            news.thumbnail !== null &&
            news.thumbnail !== '' &&
            typeof news.thumbnail.url !== 'undefined' &&
            news.thumbnail.url !== null &&
            news.thumbnail.url !== '' &&
            typeof news.link !== 'undefined' &&
            news.link !== null &&
            news.link !== '' &&
            typeof news.pubDate !== 'undefined' &&
            news.pubDate !== null &&
            news.pubDate !== ''
          ) {

            dateParser.hurriyet(news.pubDate).then(function (createDate) {
              var row = {
                id: db.UUID(),
                name: name,
                language: language,
                category: category,
                title: news.title,
                img: news.thumbnail.url,
                url: news.link,
                createdate: createDate
              }
              db.save('news', ['id', 'name', 'language', 'category', 'title', 'img', 'url', 'createdate'], [row.id, row.name, row.language, row.category, row.title, row.img, row.url, row.createdate]).then(function (result) {
                resolve(true);
              }, function (err) {
                console.log(err);
                console.log('Save Failed!!', row.name, row.category);
                reject(err);
              });
            });
          } else {
            resolve(false);
          }



          //          if (typeof data[0].pubDate === "undefined") {
          //            go(data);
          //          } else {
          //            var row = {
          //              id: db.UUID(),
          //              name: news[1].name,
          //              language: news[1].language,
          //              category: news[1].category[0].name,
          //              title: data[0].title,
          //              img: data[0].thumbnail.url,
          //              url: data[0].link,
          //              createdate: data[0].pubDate
          //            };
          //
          //            db.save('news', ['id', 'name', 'language', 'category', 'title', 'img', 'url', 'createdate'], [row.id, row.name, row.language, row.category, row.title, row.img, row.url, row.createdate]).then(function (result) {
          //              go(data);
          //            }, function (err) {
          //              console.log(err);
          //              console.log('DB SAVE FAILED!!');
          //              reject(err);
          //            });
          //          }
          //
          //          function go(data) {
          //            data.splice(0, 1);
          //
          //            if (data.length !== 0) {
          //              resolve(saveData(data));
          //            } else {
          //              resolve("DB Save Complated!");
          //            }
          //          }

        });
      }
    });
  }

  return self;
}])