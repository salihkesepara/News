angular.module('services.nav', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'views/menu.html',
      controller: 'MenuCtrl'
    })

  .state('tab.dash', {
    url: '/dash',
    views: {
      'menuContent': {
        templateUrl: 'views/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/tab/dash');

});