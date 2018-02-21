(function () {
  'use strict'

  angular.module('taxiManagement')
    .factory('Gym', Gym)

  function Gym($http, $q, $localStorage) {

    var activeGymId = null;

    return {
      newGym: function (params) {
        var def = $q.defer()
        $http.post('https://gym2go-server.herokuapp.com/api/gyms', {
            name: params.name,
            address: params.address,
            lat: params.lat,
            lon: params.lon,
            ownerUser: params.ownerUser
          })
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      getAllGyms: function () {
        var def = $q.defer()
        $http.get('https://gym2go-server.herokuapp.com/api/gyms')
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      getGyms: function (id) {
        var def = $q.defer()
        $http.get('https://gym2go-server.herokuapp.com/api/admin-users/'+id+'/gyms')
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      getGymById: function (id) {
        var def = $q.defer()
        $http.get('https://gym2go-server.herokuapp.com/api/gyms/'+id)
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      update: function (params) {
        var def = $q.defer()
        $http.put('https://gym2go-server.herokuapp.com/api/gyms/'+params.id, {
            name: params.name,
            address: params.address,
            lat: params.lat,
            lon: params.lon,
            ownerUser: params.ownerUser
          })
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      switchValidated: function(id, newState) {
        var def = $q.defer()
        $http.put('https://gym2go-server.herokuapp.com/api/gyms/'+id, {
            validated: newState 
          })
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      deleteActivity: function (id,idGym) {
        var def = $q.defer()
        $http.delete('https://gym2go-server.herokuapp.com/api/gyms/'+idGym+'/activities/'+id)
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      deleteProduct: function (id,idGym) {
        var def = $q.defer()
        $http.delete('https://gym2go-server.herokuapp.com/api/gyms/'+idGym+'/products/'+id)
          .then(function (res) {
            def.resolve(res)
          })
          .catch(function (err) {
            def.reject(err)
          })

        return def.promise
      },
      setActiveGym: function (id) {
        activeGymId = id;
      },
      getActiveGym: function () {
        return activeGymId;
      }
    }
  }
})();
