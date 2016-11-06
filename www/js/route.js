 var mainApp = angular.module("starter", ['ngRoute']);
         mainApp.config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            
            when('/', {
               templateUrl: 'template/login.html',
               controller: 'roomMateController'
            }).
            
            when('/profile', {
               templateUrl: 'template/profile.html',
               controller: 'roomMateController'
            }).
            
            otherwise({
               redirectTo: '/'
            });
         }]);
         
         mainApp.controller('AddStudentController', function($scope) {
            $scope.message = "This page will be used to display add student form";
         });