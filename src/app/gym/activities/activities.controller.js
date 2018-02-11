(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('ActivitiesController', ActivitiesController)

  function ActivitiesController($scope, $state) {
    var vm = this;

    console.log("ACTIVITIES");
  }
})();
