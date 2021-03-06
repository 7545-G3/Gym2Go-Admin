(function () {
  'use strict'

  angular.module('taxiManagement')
    .factory('Activity', Activity)

  function Activity($http, $q, $localStorage, Gym) {

    return {
      create: function (params) {
        var def = $q.defer()
        $http.put('https://gym2go-server.herokuapp.com/api/gyms/'+Gym.getActiveGym()+'/activities', {
          description: params.description,
          price: params.price,
          schedules: params.schedules
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
        $http.delete('https://gym2go-server.herokuapp.com/api/gyms/'+Gym.getActiveGym()+'/activities' + activityId)
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
