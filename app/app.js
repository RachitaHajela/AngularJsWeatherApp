'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngMaterial',
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
    controller('AppCtrl', function($scope,$http) {
        $scope.title1 = 'Hello';
        $scope.title4 = 'Warn';
        $scope.isDisabled = true;
        $scope.googleUrl = 'http://google.com';

        $http.get("http://ip.jsontest.com/?callback=showMyIP")
        .then(function(response) {
            $scope.myWelcome = response.data;
        });
});
