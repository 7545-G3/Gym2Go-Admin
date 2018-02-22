(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('GymPassesController', GymPassesController)

  function GymPassesController($scope, $state, History) {
    var vm = this;

    vm.gymPasses = [];

    activate();

    function activate() {
      History.getGymPasses()
        .then(function (result) {
          vm.gymPasses = result.data;
          console.log(vm.gymPasses);
        })
        .catch(function (err) {
          console.log('ERROR AL CARGAR LOS PASES...')
        })
    }
  }

})();
