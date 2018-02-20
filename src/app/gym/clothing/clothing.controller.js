(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('ClothingController', ClothingController)

  function ClothingController($scope, $state, Gym) {
    var vm = this;
    vm.clothing = [];
    console.log("CLOTHING");
    vm.goToClothing = goToClothing;
    vm.goToSupps = goToSupps;
    vm.goToActivities = goToActivities;
    vm.editGymInfo = editGymInfo;

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
  }
})();
