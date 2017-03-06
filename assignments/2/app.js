(function () {
  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider)
    .config(Config);

  Config.$inject = ['ShoppingListCheckOffServiceProvider'];

  function Config(ShoppingListCheckOffServiceProvider) {
    ShoppingListCheckOffServiceProvider.defaults.itemsToBuy = [
      { name:"Chocolate", quantity: 3},
      { name:"Coliflower", quantity: 1},
      { name:"Tofu", quantity: 2},
      { name:"Apple juice", quantity: 1},
      { name:"Banana", quantity: 6}
    ];
  }

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;
    buy.items = ShoppingListCheckOffService.getItemsToBuy();
    buy.markAsAlreadyBought = function(index) {
      ShoppingListCheckOffService.markAsAlreadyBought(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getItemsAlreadyBought();
  }

  function ShoppingListCheckOffService(itemsToBuy) {
    var service = this;

    items_to_buy = itemsToBuy;
    items_bought = [];

    service.getItemsToBuy = function() {
      return items_to_buy;
    }

    service.getItemsAlreadyBought = function() {
      return items_bought;
    }

    service.markAsAlreadyBought = function(index) {
      var item = items_to_buy.splice(index, 1);
      items_bought.push(item[0]);
    }
  }

  function ShoppingListCheckOffServiceProvider() {
    var provider = this;

    provider.defaults = {
      itemsToBuy: []
    };

    provider.$get = function () {
      return new ShoppingListCheckOffService(provider.defaults.itemsToBuy);
    }
  }
})()