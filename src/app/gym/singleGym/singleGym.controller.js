(function () {
    'use strict';

    angular
        .module('taxiManagement')
        .controller('SingleGymController', SingleGymController);

    function SingleGymController($state, User, Gym, $stateParams) {

      var vm = this;

      vm.registerGymCredentials = {
        id: null,
        name: null,
        address: null,
        lat: null,
        lon: null,
        ownerUser: null/*,
        cc_name: null,
        cc_number: null,
        cc_sec: null,
        cc_expiry: null*/
      }

      vm.error = null;

      vm.functionToApply = Gym.newGym;

      vm.submitGym = submitGym;
      vm.viewOptions = viewOptions;
      vm.goBack = goBack;

      activate();

      function activate() {
        console.log(User.getLoggedUserId());
        vm.registerGymCredentials.ownerUser = User.getLoggedUserId();
        if ($stateParams.id !== 'new') {
          Gym.getGymById($stateParams.id)
            .then(function (result) {
              vm.registerGymCredentials.name = result.data.name;
              vm.registerGymCredentials.address = result.data.address;
              vm.registerGymCredentials.id = $stateParams.id;
            })
            .catch(function (err) {
              console.log('ERROR LOADING GYM INFO...');
            })
        }
      }

      function submitGym() {
        if ($stateParams.id !== 'new') {
          vm.functionToApply = Gym.update;
        }

        if (vm.registerGymCredentials.address == "Av. Independencia 450") {
          vm.registerGymCredentials.lat = -34.617158; 
          vm.registerGymCredentials.lon = -58.372420;
        }

        vm.functionToApply(vm.registerGymCredentials)
          .then(function (result) {
            console.log(result);
            if ($stateParams.id !== 'new') {
              $state.go('main.gym.activities', {id: $stateParams.id});
            } else {
              $state.go('main.gym');
            }
          })
          .catch(function (err) {
            console.log("ERROR");
          })
      }

      function viewOptions() {
        var options = {
          'edit': {
            'title': 'Editar Informacion del Gimnasio',
            'button': 'Guardar'
          },
          'new': {
            'title': 'Nuevo Gimnasio',
            'button': 'Crear'
          }
        }

        if ($stateParams.id !== 'new') {
          return options['edit']
        }

        return options[$stateParams.id]
      }

      function goBack() {
        $state.go('main.gym.activities', {id: $stateParams.id});
      }
    }
})();
