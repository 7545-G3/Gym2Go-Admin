(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('TrainersController', TrainersController)

  function TrainersController($scope, $state, Gym, Trainer) {
    var vm = this;

    vm.trainers = [];
    vm.goToClothing = goToClothing;
    vm.goToSupps = goToSupps;
    vm.goToActivities = goToActivities;
    vm.editGymInfo = editGymInfo;
    vm.newTrainer = newTrainer;
    vm.deleteTrainer = deleteTrainer;

    activate();

    function activate() {
      Gym.getGymById(Gym.getActiveGym())
        .then(function (result) {
          if (result.data.trainers !== null) {
            console.log(result);
            result.data.trainers.forEach(function (value) {vm.trainers.push(value)});
          }
        })
        .catch(function (err) {
          console.log('ERROR LOADING TRAINERS...');
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

    function newTrainer() {
      $state.go('main.gym.singleTrainer', {id: Gym.getActiveGym()});
    }
    
    function deleteTrainer(id){
      Trainer.delete(id)
        .then(function (result){
          vm.trainers.splice(vm.trainers.findIndex(function(trainer){
            return trainer._id == id}),1)})
        .catch(function (err){console.log(err)});
    }
  }
})();
