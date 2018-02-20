(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('SuppsController', SuppsController)

  function SuppsController($scope, $state, Gym) {
    var vm = this;

    console.log("SUPPS");
    vm.goToClothing = goToClothing;
    vm.goToSupps = goToSupps;
    vm.goToActivities = goToActivities;
    vm.editGymInfo = editGymInfo;

    vm.newSupp = newSupp;

    function goToClothing() {
     $state.go('main.gym.clothing', {id: Gym.getActiveGym()});
    }
    
    function goToActivities() {
     $state.go('main.gym.activities', {id: Gym.getActiveGym()});
    }

    function goToSupps() {
     $state.go('main.gym.supps', {id: Gym.getActiveGym()});
    }

    function editGymInfo() {
     $state.go('main.singleGym', {id: Gym.getActiveGym()});
    }

    function newSupp() {
      $state.go('main.gym.singleSupp', {id: Gym.getActiveGym()});
    }
  }
})();
