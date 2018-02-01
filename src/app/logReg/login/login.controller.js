(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('LoginController', LoginController);

  function LoginController($state, User, $localStorage) {
    var vm = this;

    vm.userCredentials = {
      username: $localStorage.lastUser,
      password: null
    }

    vm.error = null;

    vm.login = login;
    vm.logout = logout;

    function login() {
      var response = 'gym';

      if (response == "admin") {
        $state.go('main.admin')
      } else {
        $state.go('main.gym')
      }
      /*User.login(vm.userCredentials)
        .then(function (result) {
          console.log(result)
          vm.dataLoading = false;
          $state.go('main.drivers')
        })
        .catch(function (err) {
          console.log('something was wrong');
          vm.error = err
        })*/
    }
    function logout() {
      User.logout()
    }

  }

})();
