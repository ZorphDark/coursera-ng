(function () {
  angular.module("MenuApp")
    .component("items", {
      templateUrl: 'scripts/categories/categories.template.html',
      bindings: {
        items: '<'
      }
    })
})()