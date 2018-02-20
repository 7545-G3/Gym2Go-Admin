(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('ActivitiesController', ActivitiesController)

  function ActivitiesController($scope, $state, Gym) {
    var vm = this;
    
    vm.activities = [];

    vm.goToClothing = goToClothing;
    vm.goToSupps = goToSupps;
    vm.goToActivities = goToActivities;
    vm.editGymInfo = editGymInfo;
    
    activate();

    function activate() {
      console.log(Gym.getActiveGym());
      Gym.getGymById(Gym.getActiveGym())
        .then(function (result) {
          if (result.data.activities !== null) {
            result.data.activities.forEach(function (value) {vm.activities.push(value)});
          }
        })
        .catch(function (err) {
          console.log('ERROR LOADING GYMS...');
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
    
    function newActivity() {
      console.log('newActivity');
     $state.go('main.singleActivity', {id: Gym.getActiveGym()});
    }
  }
})();
