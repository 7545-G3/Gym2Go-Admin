(function() {
  'use strict';

  angular
    .module('taxiManagement')
    .config(stateConfig);

  function stateConfig($stateProvider) {
    $stateProvider

      .state({
        name: 'login',
        url: '/login',
        templateUrl: 'app/logReg/login/login.view.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })

      .state({
        name: 'register',
        url: '/register?token=asd89320dfjlsh09e1',
        templateUrl: 'app/logReg/register/register.view.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
      })
  }

})();
