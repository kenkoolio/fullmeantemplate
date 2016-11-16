var app = angular.module('app', ['ngRoute','ngCookies']);

app.controller('registrationController', [ 'userFactory',
function(userFactory){
  this.register = function(){
    userFactory.create(this.newUser, function(newUser){
      this.user = newUser
    });
    $location.url('/home')
  }
}])

app.factory('userFactory',[ '$http', function($http){
  var users = [];

  function userFactory() {
    this.create = function(newUser, callback){
      $http.post('/users', newUser).then(function(response){
        callback(response.data)
      })
    }
  }

  return new userFactory();
}])
