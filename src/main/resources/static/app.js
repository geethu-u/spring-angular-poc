angular.module('CLEApp', ['AngularChart']).config(
  ['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/trends', {
          templateUrl: 'trends.html',
          controller: 'TrendsCtrl'

        })
        .when('/search', {
          templateUrl: 'searchlogs.html',
          controller: 'SearchCtrl'

        })
        .otherwise({
          redirectTo: '/search'
        });
    }
  ]);
