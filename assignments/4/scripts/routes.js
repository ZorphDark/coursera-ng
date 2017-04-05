(function(){
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'scripts/home.template.html'
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'scripts/categories/categories.template.html',
        controller: 'MenuController as menu',
        resolve: {
          categoriesData: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
      .state('items', {
        url: '/categories/{categoryShortName}/items/',
        templateUrl: 'scripts/categories/items.template.html',
        controller: 'CategoryItemsController as items',
        resolve: {
          categoryItemsData: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      })
  }
})()