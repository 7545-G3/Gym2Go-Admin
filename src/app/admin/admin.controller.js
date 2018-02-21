(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('AdminController', AdminController)

  function AdminController($scope, $state, Gym) {
    var vm = this;

    vm.gyms = [];

    vm.switchState = switchState;

    activate();

    function activate() {
    	Gym.getAllGyms()
        .then(function (result) {
          if (result.data !== null) {
            result.data.forEach(function (value) {vm.gyms.push(value)});
          	vm.gyms.forEach(function (gym) {
          		if (gym.validated) {
          			gym.estado = "Valido";
          		} else {
          			gym.estado = "Invalido";
          		}
          	})
          }
        })
        .catch(function (err) {
          console.log('ERROR LOADING GYMS...');
        })
    }

    function switchState(gymId, oldState) {
    	Gym.switchValidated(gymId, !oldState)
        .then(function (result) {
        	console.log(result);
          	if (result.data !== null) {
	        	var auxGym = vm.gyms.find(function(gym) {return gym._id == gymId});
	        	auxGym.validated = !(auxGym.validated);
	        	if (auxGym.estado == "Valido") {
	        		auxGym.estado = "Invalido";
	        	} else {
	        		auxGym.estado = "Valido";
	        	}
	        }
        })
        .catch(function (err) {
          console.log('ERROR LOADING GYMS...');
        })
    }
  }

})();
