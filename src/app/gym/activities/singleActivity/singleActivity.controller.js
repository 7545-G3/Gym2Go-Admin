(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('SingleActivityController', SingleActivityController);

  function SingleActivityController($state, Activity, $stateParams, Gym) {
    var vm = this;

    vm.goBack = goBack;

    vm.new_activity = {
      description: null,
      price: null,
      date: null,
      time: null
    };

    vm.error = null;

    vm.submitActivity = submitActivity;

    function submitActivity() {
      vm.new_activity.price = Number(vm.new_activity.price);
      Activity.create(vm.new_activity)
        .then(function (result) {
          console.log(result);
          $state.go('main.gym.activities')
        })
        .catch(function (err) {
          vm.error = err;
        })

    }

    function goBack() {
      $state.go('main.gym.activities', {id: Gym.getActiveGym()});
    }

  }
})();
