var app = angular.module('myapp',[]);

app.controller('myControl',['$scope','myService',function($scope,myService){
  $scope.test = "Welcome  to angular";
  $scope.users = myService.getUser();
}]);

app.directive('myDirective',[function () {
  return{
    restrict:'AE',
    template:"<h1>This is custome element</h1>"
  };
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
