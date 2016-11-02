(function () {
  'use strict';

  angular.module("LunchCheckApp", [])
    .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.checkResult = "";
    $scope.checkResultColor = "";

    $scope.dishes = "";
    $scope.checkNumber = function () {
      var dishes_str = $scope.dishes;

      if ($scope.dishes.length == 0) {
        $scope.checkResult = "Please enter data first";
        $scope.checkResultColor = "red";
        return;
      }

      var dish_arr = $scope.dishes.split(",")
        .map(Function.prototype.call, String.prototype.trim)
        .filter(Boolean);
      if (dish_arr.length <= 3) {
        $scope.checkResult = "Enjoy!";
      } else {
        $scope.checkResult = "Too much!";
      }
      $scope.checkResultColor = "green";
    }
  };
})();
