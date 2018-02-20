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
    vm.newSupp = newSupp;
    vm.deleteSupp = vm.deleteSupp;

    activate();

    function activate() {
      Gym.getGymById(Gym.getActiveGym())
        .then(function (result) {
          if (result.data.products !== null) {
            console.log(result);
            result.data.products.forEach(function (value) {
              if(value.type === 'SUPPS'){vm.supps.push(value)}});
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

    function newSupp() {
      $state.go('main.gym.singleSupp', {id: Gym.getActiveGym()});
    }
    
    function deleteSupp(id){
      Gym.deleteProduct(id,Gym.getActiveGym())
        .then(function (result){
          vm.supps.splice(vm.supps.findIndex(function(supp){
            return supp._id == id}),1)})
        .catch(function (err){console.log(err)});
    }
  }
})();
