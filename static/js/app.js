var app = angular.module('app',[]);

app.controller('menu', ['$scope', "$http", function($scope, $http) {
    $http.get('/menu', {params: {name:'main'}})
      .success(function(data, status, headers, config) {
          $scope.menu = data;
          console.log($scope.menu);
    }).error(function(data, status, headers, config) {
          console.log("error getting menu: " + status);
    });
}
]);
