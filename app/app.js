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

       /* $http.get("http://ip.jsontest.com/?callback=showMyIP")
        .then(function(response) {
            $scope.myWelcome = {"ip": "216.2.193.1"};
            //response.data;
        });*/

    var url = "http://api.openweathermap.org/data/2.5/weather?APPID=70927e3ee92e2348e18e53fd5a9d9afd&q=NewYork&callback=JSON_CALLBACK";

    $http.jsonp(url).
    success(function(data, status, headers, config) {
        $scope.myWelcome = data;
    }).
    error(function(data, status, headers, config) {
        $scope.error = true;
    });
});
