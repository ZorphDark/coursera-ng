(function(){
  'use strict';

  angular
    .module('app', [])
    .controller('viewerController', viewerController);

  viewerController.$inject = ['$scope', '$filter'];

  function viewerController($scope, $filter){
    $scope.name = "";
    $scope.numeric = 0;
    $scope.updateNumeric = function() {
      $scope.numeric = calculateNumeric($scope.name);
    }
    $scope.upperName = function() {
      var uppercase = $filter("uppercase");
      $scope.name = uppercase($scope.name)
    }

    function calculateNumeric(string) {
      var totalStringValue = 0;
      for(var i=0; i< string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }
  }
})()