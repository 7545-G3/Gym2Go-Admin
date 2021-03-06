(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('SingleClothingItemController', SingleClothingItemController);

  function SingleClothingItemController($state, ClothingItem, $stateParams, Gym) {
    var vm = this;

    vm.goBack = goBack;

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

    vm.submitClothingItem = submitClothingItem;

    activate();

    function activate() {
      var fileSelect = document.getElementById("image");
      fileSelect.onchange = function() {
        var f = fileSelect.files[0], r = new FileReader();

        r.onloadend = function(e) { 
          vm.new_clothingitem.image = e.target.result;
        }

        r.readAsDataURL(f);
      };
    }

    function submitClothingItem() {
      vm.new_clothingitem.price = Number(vm.new_clothingitem.price);
      ClothingItem.create(vm.new_clothingitem)
        .then(function (result) {
          console.log(result);
          $state.go('main.gym.clothing', {id: Gym.getActiveGym()});
        })
        .catch(function (err) {
          vm.error = err;
        })
    }

    function goBack() {
      $state.go('main.gym.clothing', {id: Gym.getActiveGym()});
    }

  }
})();
