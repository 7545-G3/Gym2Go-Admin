(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('SuppsController', SuppsController)

  function SuppsController($scope, $state) {
    var vm = this;

    console.log("SUPPS");
  }
})();
