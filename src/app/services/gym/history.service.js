(function () {
  'use strict'

  angular.module('taxiManagement')
    .factory('History', History)

  function History($http, $q, User) {

    return {
      getGymPasses: function (params) {
        var def = $q.defer()
        $http.get('https://gym2go-server.herokuapp.com/api/admin-users/'+User.getLoggedUserId()+'/gym-passes')
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      getPurchases: function (params) {
        var def = $q.defer()
        $http.get('https://gym2go-server.herokuapp.com/api/admin-users/'+User.getLoggedUserId()+'/supplements')
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
