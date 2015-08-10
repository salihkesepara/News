angular.module('service.dateParser', [])

.factory('dateParser', ['$q', function ($q) {
  var self = this;
  
  self.hurriyet = function(createdate) {
    return $q(function(resolve, reject) {
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
      var date = {
        day: createdate.substring(5, 7),
        month: createdate.substring(8, 11),
        year: createdate.substring(12, 16),
        hour: createdate.substring(17, 19),
        minute: createdate.substring(20, 22),
        second: createdate.substring(23, 25),
      }
      
      for (var i = 0; i < months.length; i++) {
        if (months[i] == date.month) {
          if (i < 9) {
            date.month = '0' + ++i;
            break;
          } else {
            date.month = ++i;
            break;
          }
        }
      }
      
      var newDate = date.year + '-' + date.month + '-' + date.day + ' ' + date.hour + ':' + date.minute + ':' + date.second;
      resolve(newDate);
    });
  }

  return self;
}])