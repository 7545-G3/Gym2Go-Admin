(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('SingleSuppController', SingleSuppController);

  function SingleSuppController($state, Supplement, $stateParams) {
    var vm = this;

    vm.new_supp = {
      name: null,
      price: null,
      image: null,
      description: null,
      brand: null,
      gender: null,
      type: 'SUPP',
      category: null,
    };

    vm.error = null;

    vm.viewOptions = viewOptions;

    vm.submitSupp = submitSupp;

    vm.functionToApply = Supplement.create;

    function submitSupp () {
      vm.functionToApply(vm.new_supp)
        .then(function (result) {
          console.log(result);
          $state.go('main.gym.supps')
        })
        .catch(function (err) {
          vm.error = err;
        })
    }

    function viewOptions() {
      var options = {
        'new': {
          'title': 'Agregar nuevo suplemento',
          'button': 'Agregar'
        }
      }
      return options[$stateParams.id]

    }

  }
})();
