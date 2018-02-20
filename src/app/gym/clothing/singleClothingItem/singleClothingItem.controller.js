(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('SingleClothingItemController', SingleClothingItemController);

  function SingleClothingItemController($state, ClothingItem, $stateParams) {
    var vm = this;

    vm.new_clothingitem = {
      name: null,
      price: null,
      image: null,
      description: null,
      brand: null,
      gender: null,
      type: 'CLO',
      category: null
    };

    vm.error = null;

    vm.viewOptions = viewOptions;

    vm.submitClothingItem = submitClothingItem;

    vm.functionToApply = ClothingItem.create;

    function submitClothingItem() {
      vm.functionToApply(vm.new_clothingitem)
        .then(function (result) {
          $state.go('main.gym.clothing')
        })
        .catch(function (err) {
          vm.error = err;
        })
    }

    function viewOptions() {
      var options = {
        'new': {
          'title': 'Agregar nueva indumentaria',
          'button': 'Agregar'
        }
      }
      return options[$stateParams.id]

    }

  }
})();
