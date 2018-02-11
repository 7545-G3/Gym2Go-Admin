(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('GymController', GymController)

  function GymController($scope, $state) {
    var vm = this;

    vm.goToActivities = goToActivities;
    vm.goToClothing = goToClothing;
    vm.goToSupps = goToSupps;

    function goToActivities() {
    	$state.go('main.gym.activities');
    }

    function goToClothing() {
    	$state.go('main.gym.clothing');
    }

    function goToSupps() {
    	$state.go('main.gym.supps');
    }

  }

})();
