(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('SingleSuppController', SingleSuppController);

  function SingleSuppController($state, Supplement, $stateParams, Gym) {
    var vm = this;

    vm.goBack = goBack;

    vm.new_supp = {
      name: null,
      price: null,
      image: null,
      description: null,
      brand: null,
      gender: null,
      type: 'SUPPS',
      category: null,
    };

    vm.error = null;

    vm.submitSupp = submitSupp;

    function submitSupp () {
      vm.new_supp.price = Number(vm.new_supp.price);
      Supplement.create(vm.new_supp)
        .then(function (result) {
          console.log(result);
          $state.go('main.gym.supps', {id: Gym.getActiveGym()});
        })
        .catch(function (err) {
          vm.error = err;
        })
    }

    function goBack() {
      $state.go('main.gym.supps', {id: Gym.getActiveGym()});
    }
    
  }
})();
