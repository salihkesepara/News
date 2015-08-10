angular.module('starter', ['services.injects'])

.run(['$ionicPlatform', 'db', '$cordovaStatusbar', function ($ionicPlatform, db, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
      $cordovaStatusbar.overlaysWebView(true);
    }
  });
}])

.config(function ($cordovaInAppBrowserProvider) {

  var defaultOptions = {
    location: 'no',
    clearcache: 'no',
    toolbar: 'yes'
  };
  document.addEventListener("deviceready", function () {
    $cordovaInAppBrowserProvider.setDefaultOptions(defaultOptions);
  }, false);

})