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
            User.setLoggedUserId(result.data._id);
            console.log(result.data._id);
            $state.go('main.gym')
          } else {
            User.setLoggedUserId(result.data._id);
            console.log(result.data._id);
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
