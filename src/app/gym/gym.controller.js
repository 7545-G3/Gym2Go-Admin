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
    vm.goToPasses = goToPasses;
    vm.goToPurchases = goToPurchases;

    activate();

    function activate() {
      console.log(User.getLoggedUserId());
      Gym.getGyms(User.getLoggedUserId())
        .then(function (result) {
          console.log(result);
          if (result.data.length !== 0) {
            result.data.forEach(function (value) {vm.gyms.push(value)});
            console.log(vm.gyms);
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

    function goToPasses() {
      $state.go('main.gym.passes');
    }

    function goToPurchases() {
      $state.go('main.gym.purchases');
    }

  }

})();
