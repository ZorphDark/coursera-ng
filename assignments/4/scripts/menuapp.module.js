(function () {
  angular.module("MenuApp", ['ui.router', 'data'])
    .controller('MenuController', MenuController)
    .controller('CategoryItemsController', CategoryItemsController);
    
  MenuController.$inject = ['categoriesData'];

  function MenuController(categoriesData) {
    var menu = this;

    menu.categories = categoriesData.data;
  }

  CategoryItemsController.$inject = ['categoryItemsData'];

  function CategoryItemsController(categoryItemsData) {
    var items = this;

    items.data = categoryItemsData.data;
  }

})()