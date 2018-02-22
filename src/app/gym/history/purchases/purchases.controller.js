(function () {
  'use strict';

  angular
    .module('taxiManagement')
    .controller('PurchasesController', PurchasesController)

  function PurchasesController($scope, $state, History) {
    var vm = this;

    vm.purchases = [];

    activate();

    function activate() {
      History.getPurchases()
        .then(function (result) {
          vm.purchases = result.data;
          console.log(vm.purchases);
        })
        .catch(function (err) {
          console.log('ERROR AL CARGAR LOS SUPLEMENTOS...')
        })
    }
  }

})();
