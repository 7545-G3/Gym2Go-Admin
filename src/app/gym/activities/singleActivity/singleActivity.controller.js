(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('SingleActivityController', SingleActivityController);

  function SingleActivityController($state, Activity, $stateParams) {
    var vm = this;

    vm.new_activity = {
      description: null,
      price: null,
      date: null,
      time: null
    };

    vm.error = null;

    vm.viewOptions = viewOptions;

    vm.submitActivity = submitActivity;

    vm.functionToApply = Activity.create;

    function submitActivity() {
      vm.functionToApply(vm.new_activity)
        .then(function (result) {
          console.log(result);
          $state.go('main.gym.activities')
        })
        .catch(function (err) {
          vm.error = err;
        })
    }

    function viewOptions() {
      var options = {
        'new': {
          'title': 'Agregar nueva actividad',
          'button': 'Agregar'
        }
      }
      return options[$stateParams.id]

    }

  }
})();
