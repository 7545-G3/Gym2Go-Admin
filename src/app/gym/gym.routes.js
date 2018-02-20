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
        url: 'activities/{id}',
        templateUrl: 'app/gym/activities/activities.view.html',
        controller: 'ActivitiesController',
        controllerAs: 'vm'
      })

      .state({
        name: 'main.gym.clothing',
        url: 'clothing/{id}',
        templateUrl: 'app/gym/clothing/clothing.view.html',
        controller: 'ClothingController',
        controllerAs: 'vm'
      })

      .state({
        name: 'main.gym.supps',
        url: 'supps/{id}',
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
      
      .state({
        name: 'main.gym.singleActivity',
        url: 'singleActivity/{id}',
        templateUrl: 'app/gym/activities/singleActivity/singleActivity.view.html',
        controller: 'SingleActivityController',
        controllerAs: 'vm'
      })    
    $urlRouterProvider.otherwise('login')
  }

})();
