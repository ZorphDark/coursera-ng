(function(){
  angular.module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", FoundItemsDirective);

  NarrowItDownController.$inject = ['$scope', '$q', 'MenuSearchService'];
  function NarrowItDownController($scope, $q, MenuSearchService) {
    var nitdown = this;

    nitdown.getMenuItems = function() {
      nitdown.userHasSearched = true;
      var menuItemsPromise = MenuSearchService.getMatchedMenuItems(nitdown.searchTerm);
      menuItemsPromise.then(function(result) {
        nitdown.found = result;
      });
    }
    nitdown.removeMenuItem = function(index) {
      nitdown.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
          url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        })
        .then(function(result) {
          var allItems = result.data.menu_items;
          var foundItems = allItems.filter(function(value) {
            return value.description.indexOf(searchTerm) >= 0;
          });
          return foundItems;
        })
    }
  }

  function FoundItemsDirective() {
    return {
      restrict: 'E',
      scope: {
        items: '<foundItems',
        remove: '&onRemove'
      },
      templateUrl: "found-items.html"
    }
  }
})()