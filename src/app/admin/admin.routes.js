(function() {
  'use strict';

  angular
    .module('taxiManagement')
    .config(stateConfig);

  function stateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state({
        name: 'main.admin',
        url: 'admin',
        templateUrl: 'app/admin/admin.view.html',
        controller: 'AdminController',
        controllerAs: 'vm'
      })
      
    $urlRouterProvider.otherwise('login')
  }

})();
