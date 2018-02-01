(function() {
  'use strict';

  angular
    .module('taxiManagement')
    .config(stateConfig);

  function stateConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state({
        name: 'main.gym',
        url: 'gym',
        templateUrl: 'app/gym/gym.view.html',
        controller: 'GymController',
        controllerAs: 'vm'
      })

      .state({
        name: 'main.singleGym',
        url: 'gym/{id}',
        templateUrl: 'app/gym/singleGym/singleGym.view.html',
        controller: 'SingleGymController',
        controllerAs: 'vm'
      })
      
    $urlRouterProvider.otherwise('login')
  }

})();
