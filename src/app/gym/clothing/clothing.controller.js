(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('ClothingController', ClothingController)

  function ClothingController($scope, $state) {
    var vm = this;

    console.log("CLOTHING");
  }
})();
