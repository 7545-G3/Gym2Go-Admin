(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('LoginController', LoginController);

  function LoginController($state, User, $localStorage) {
    var vm = this;

    vm.userCredentials = {
      email: null,
      password: null
    }

    vm.error = null;

    vm.login = login;
    vm.logout = logout;

    function login() {
      User.login(vm.userCredentials)
        .then(function (result) {
          console.log(result)
          if (result.data.type == "gym") {
            $state.go('main.gym.activities')
          } else {
            $state.go('main.admin')
          }
        })
        .catch(function (err) {
          console.log('something was wrong');
          vm.error = err
        })
    }
    function logout() {
      User.logout()
    }

  }

})();
