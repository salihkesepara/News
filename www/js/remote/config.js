angular.module('remote.config', [])

.factory('config', [function () {
  var self = this;

  self.milliyet = {
    url: 'http://www.milliyet.com.tr/D/rss/rss/Rss_2.xml'
  };

  return self;
}]);
