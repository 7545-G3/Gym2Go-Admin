(function () {
  'use strict'

  angular.module('taxiManagement')
    .factory('Trainer', Trainer)

  function Trainer($http, $q, $localStorage, Gym) {

    return {
      create: function (params) {
        var def = $q.defer()
        $http.put('https://gym2go-server.herokuapp.com/api/gyms/'+Gym.getActiveGym()+'/trainers', {
          name: params.name,
          age: params.age,
          specialty: params.specialty,
          price: params.price,
          image: params.image
        })
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })
        return def.promise
      },
      delete: function (trainerId) {
        var def = $q.defer()
        $http.delete('https://gym2go-server.herokuapp.com/api/gyms/'+Gym.getActiveGym()+'/trainers' + trainerId)
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
