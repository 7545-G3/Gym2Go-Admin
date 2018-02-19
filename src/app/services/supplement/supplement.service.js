(function () {
  'use strict'

  angular.module('taxiManagement')
    .factory('Supplement', Supplement)

  function Supplement($http, $q, $localStorage) {

    return {
      create: function (params) {
        var def = $q.defer()
        $http.put('https://gym2go-server.herokuapp.com/api/gyms/'+$localStorage.getItem('id')+'/products', {
          name: params.name,
          description: params.description,
          price: params.price,
          image: params.image,
          type: params.type,
          category: params.category,
          brand: params.brand,
          gender: params.gender
        })
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      delete: function (productId) {
        var def = $q.defer()
        $http.delete('https://gym2go-server.herokuapp.com/api/gyms/'+$localStorage.getItem('id')+'/products' + productId)
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      }
    }
  }
})();
