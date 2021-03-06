(function () {
  'use strict';

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", lunchCheckController);

  lunchCheckController.$inject = ['$scope', '$filter'];

  function lunchCheckController($scope, $filter) {
    $scope.items = '';
    $scope.message = '';

    $scope.checkIfTooMuch = function() {
      var count = countLunchItems($scope.items);
      $scope.message = evaluateNutrition(count);
    }

    function countLunchItems(items) {
      var array_items = items
        .split(',') // separate items by comma
        .filter(function(val) { // filter non-empty values
          return !!val.trim();
        });
      return array_items.length;
    }

    function evaluateNutrition(count) {
      if (count) {
        $scope.message_type = "success";
        $scope.input_validation_state = "has-success";
        return (count <=3 )
          ? "Enjoy!"
          :"Too Much!";
      } else {
        $scope.message_type = "danger";
        $scope.input_validation_state = "has-error";
        return "Please enter data first";
      }
    }
  }

})()