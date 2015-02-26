/**
 * Created by Trish on 2/21/2015.
 */
(function() {

  var app = angular.module("WeatherViewer", []);

  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.daily = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the user";
    };


    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=Boston")
      .then(onUserComplete, onError);


    $scope.message = "Hello, Angular!";


  };

  app.controller("MainController", ["$scope", "$http", MainController]);

}());
