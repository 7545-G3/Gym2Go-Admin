(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('SuppsController', SuppsController)

  function SuppsController($scope, $state, Gym) {
    var vm = this;

    vm.supps = [];
    vm.goToClothing = goToClothing;
    vm.goToSupps = goToSupps;
    vm.goToActivities = goToActivities;
    vm.editGymInfo = editGymInfo;

    activate();

    function activate() {
      Gym.getGymById(Gym.getActiveGym())
        .then(function (result) {
          if (result.data.activities !== null) {
            result.data.activities.forEach(function (value) {
              if(value.type === 'SUPPS'){vm.clothing.push(value)}});
          }
        })
        .catch(function (err) {
          console.log('ERROR LOADING SUPPS...');
        })
    }

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
