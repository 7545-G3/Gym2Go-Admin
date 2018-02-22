(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('SingleTrainerController', SingleTrainerController);

  function SingleTrainerController($state, Trainer, $stateParams, Gym) {
    var vm = this;

    vm.goBack = goBack;

    vm.new_trainer = {
      name: null,
      price: null,
      image: null,
      age: null,
      specialty: null
    };

    vm.error = null;

    vm.submitTrainer = submitTrainer;

    activate();

    function activate() {
      var fileSelect = document.getElementById("image");
      fileSelect.onchange = function() {
        var f = fileSelect.files[0], r = new FileReader();

        r.onloadend = function(e) { 
          vm.new_trainer.image = e.target.result;
        }

        r.readAsDataURL(f);
      };
    }

    function submitTrainer () {
      vm.new_trainer.price = Number(vm.new_trainer.price);
      console.log(vm.new_trainer.image);
      Trainer.create(vm.new_trainer)
        .then(function (result) {
          console.log(result);
          $state.go('main.gym.trainers', {id: Gym.getActiveGym()});
        })
        .catch(function (err) {
          vm.error = err;
        })
    }
    
    function goBack() {
      $state.go('main.gym.trainers', {id: Gym.getActiveGym()});
    }
    
  }
})();
