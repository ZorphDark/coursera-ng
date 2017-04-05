(function () {
  angular.module('MenuApp')
    .component('categories', {
      templateUrl: 'scripts/categories/categories-component.template.html',
      bindings: {
        categories: '<'
      }
    });
})()