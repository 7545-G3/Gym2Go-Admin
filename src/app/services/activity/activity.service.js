(function () {
  'use strict'

  angular.module('taxiManagement')
    .factory('Activity', Activity)

  function Activity($http, $q, $localStorage) {

    return {
      create: function (params) {
        var def = $q.defer()
        $http.put('https://gym2go-server.herokuapp.com/api/gyms/'+$localStorage.getItem('id')+'/activities', {
          description: params.description,
          price: params.price,
          date: params.date,
          time: params.time
        })
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      delete: function (activityId) {
        var def = $q.defer()
        $http.delete('https://gym2go-server.herokuapp.com/api/gyms/'+$localStorage.getItem('id')+'/activities' + activityId)
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
