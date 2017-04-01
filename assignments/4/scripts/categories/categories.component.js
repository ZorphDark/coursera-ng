(function () {
  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'scripts/categories/categories.template.html',
      bindings: {
        categories: '<'
      }
    });
})()