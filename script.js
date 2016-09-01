var app = angular.module('myapp',[]);

app.controller('myControl',['$scope','myService',function($scope,myService  ){
  $scope.test = "Welcome  to angular";
  $scope.users = myService.getUser();
}]);

app.factory('myService',[function(){
  function getUser(){
    return [
      {
        name:'siva',
        age:28
      },
      {
        name:'ram',
        age:27
      },
    ];
  }
  return{
    getUser:getUser
  };
}]);
