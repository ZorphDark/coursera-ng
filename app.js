(function () {
  'use strict';

  angular
    .module('app', [])
    .controller('viewerController', viewerController)
    .controller('parentCtrl', parentCtrl)
    .controller('childCtrl', childCtrl)
    .filter('loves', LovesFilter);

  viewerController.$inject = ['$scope', '$filter', 'lovesFilter'];

  function viewerController($scope, $filter, lovesFilter) {
    $scope.name = "";
    $scope.numeric = 0;
    $scope.updateNumeric = function () {
      $scope.numeric = calculateNumeric($scope.name);
    }
    $scope.upperName = function () {
      return $filter("uppercase")($scope.name);
    }

    function calculateNumeric(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }

    $scope.books = [
      {
        title: "Pale Fire",
        author: "Vladimir Nabokov",
        year: 1962
      },
      {
        title: "Ulysses",
        author: "James Joyce",
        year: 1922
      },
      {
        title: "Gravity’s Rainbow",
        author: "Thomas Pynchon",
        year: 1973
      }
    ];
  }

  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace("likes", "loves");
      return input;
    }
  }

  function parentCtrl($scope) {
    var parent = this;
    parent.title = "parent";
    console.log("parent scope:", $scope);
  }
  function childCtrl($scope) {
    var child = this;
    child.title = "child";
    console.log("child scope:", $scope);    
  }
})()