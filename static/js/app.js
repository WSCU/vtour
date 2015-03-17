var app = angular.module('myApp', []);

function MenuObj($http) {
    this.getMenu = function(menuName, callback) {
        $http.get('/menu', {params: {menuName: menuName}})
        .success(function(data, status, headers, config) {
            callback(null, data);
        })
        .error(function(data, status, headers, config) {
            callback(true, null);
        });
    };
}

app.service('srv', ['$http', MenuObj]);

app.controller('menuController', ['$scope', '$http', 'srv'],
    function($scope, $http, $srv) {
        $http.get('/menu', {params: {menuName: 'main'}})
        .success(function(data, status, headers, config) {
            $scope.menu = data;
        })
        .error(function(data, status, headers, config) {
            $scope.menu = null;
        });
});
