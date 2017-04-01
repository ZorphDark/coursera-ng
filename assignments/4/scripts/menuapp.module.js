(function () {
  angular.module("MenuApp", ['ui.router', 'data'])
    .controller('MenuController', MenuController)
    .controller('CategoryItemsController', CategoryItemsController);
    
  MenuController.$inject = ['MenuDataService', 'categoriesData'];

  function MenuController(MenuDataService, categoriesData) {
    var menu = this;

    menu.categories = categoriesData.data;
  }

  CategoryItemsController.$inject = ['MenuDataService', 'categoryItemsData'];

  function CategoryItemsController(MenuDataService, categoryItemsData) {
    var items = this;

    items.list = categoryItemsData.data.menu_items;
  }

})()