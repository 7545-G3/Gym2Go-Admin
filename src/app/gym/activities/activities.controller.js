(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('ActivitiesController', ActivitiesController)

  function ActivitiesController($scope, $state, Gym) {
  	var vm = this;

    vm.goToClothing = goToClothing;
    vm.goToSupps = goToSupps;
    vm.editGymInfo = editGymInfo;

    function goToClothing() {
    	$state.go('main.gym.clothing', {id: Gym.getActiveGym()});
    }

    function goToSupps() {
    	$state.go('main.gym.supps', {id: Gym.getActiveGym()});
    }

    function editGymInfo() {
    	$state.go('main.singleGym', {id: Gym.getActiveGym()});
    }
  }
})();
