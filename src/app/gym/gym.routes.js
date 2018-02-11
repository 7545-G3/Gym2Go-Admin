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
        name: 'main.gym.activities',
        url: 'activities',
        templateUrl: 'app/gym/activities/activities.view.html',
        controller: 'ActivitiesController',
        controllerAs: 'vm'
      })

      .state({
        name: 'main.gym.clothing',
        url: 'clothing',
        templateUrl: 'app/gym/clothing/clothing.view.html',
        controller: 'ClothingController',
        controllerAs: 'vm'
      })

      .state({
        name: 'main.gym.supps',
        url: 'supps',
        templateUrl: 'app/gym/supps/supps.view.html',
        controller: 'SuppsController',
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
