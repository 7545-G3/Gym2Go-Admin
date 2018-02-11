(function () {
    'use strict';

    angular
        .module('taxiManagement')
        .controller('RegisterController', RegisterController);

    function RegisterController($state, User, SignupErrorHandler) {

      var vm = this;

      vm.registerCredentials = {
        email: null,
        password: null,
        type: 'gym'/*,
        cc_name: null,
        cc_number: null,
        cc_sec: null,
        cc_expiry: null*/
      }

      vm.error = null;

      vm.register = register;

      function register() {
        User.signup(vm.registerCredentials)
          .then(function (result) {
            console.log(result);
            $state.go('login')
          })
          .catch(function (err) {
            vm.error = SignupErrorHandler.handleError(err);
          })
      }
    }

})();
