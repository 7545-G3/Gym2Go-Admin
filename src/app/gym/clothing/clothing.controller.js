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
    vm.newClothing = newClothing;

    activate();

    function activate() {
      console.log(Gym.getActiveGym());
      Gym.getGymById(Gym.getActiveGym())
        .then(function (result) {
          if (result.data.products !== null) {
            result.data.products.forEach(function (value) {
              if(value.type === 'CLO'){vm.clothing.push(value)}});
          }
        })
        .catch(function (err) {
          console.log('ERROR LOADING CLOATHING...');
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
    
    function newClothing() {
      console.log('newClothing');
      $state.go('main.gym.singleClothingItem', {id: Gym.getActiveGym()});
    }
  }
})();
