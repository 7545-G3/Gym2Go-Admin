(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('GymController', GymController)

  function GymController($scope, $state, Gym, User) {
    var vm = this;

    vm.gyms = [];

    vm.goToNewGym = goToNewGym;
    vm.goToGym = goToGym;

    activate();

    function activate() {
      console.log(User.getLoggedUserId());
      //HARDCODEADO POR AHORA
      Gym.getGyms("5a7fc59e47dd82001404a8a5")
        .then(function (result) {
          if (result.data !== null) {
            console.log(vm.gyms);
            vm.gyms.push(result.data);
            vm.goToGym(vm.gyms[0]._id);
          } else {
            vm.goToNewGym();
          }
        })
        .catch(function (err) {
          console.log('ERROR LOADING GYMS...');
        })
    }

    function goToGym(idParam) {
      Gym.setActiveGym(idParam);
      $state.go('main.gym.activities', {id: idParam});
    }

    function goToNewGym() {
      $state.go('main.singleGym', {id: 'new'});
    }

  }

})();
