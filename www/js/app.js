// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform,$state) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $state.go('login');
})


app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'template/login.html',
                controller: 'roomMateController'
            })

            .state('profile', {
                url: '/profile',
                templateUrl: 'template/profile.html',
                controller: 'roomMateController'
            })
           
        $urlRouterProvider.otherwise('/login');
      });



app.controller('roomMateController',['$scope','$log','$ionicSideMenuDelegate','$state',roomMateController]);

function roomMateController($scope,$log,$ionicSideMenuDelegate,$state){

  $scope.login = true;
  $scope.newUser = false;

  $scope.toggleLogin = function(){
    $scope.login = ($scope.login == true) ? false:true; 
    $scope.newUser = ($scope.newUser == true) ? false:true; 
  }

  $scope.date = new Date().toDateString().split(' ')[2] + 'th'+' '+ new Date().toDateString().split(' ')[1];
  
   $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.showMe = function(){
    alert("Hello there!");
  }

  $scope.goHome = function(){
    $state.go('login');
  }

  $scope.loginProcess = function(){

    $state.go('profile');
    

  }

$scope.active = true;
}







         
        







