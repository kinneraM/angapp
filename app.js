var employeeManager = angular.module('employeeManager', ['ngRoute']);

employeeManager.controller('employeesController', ['$scope', function($scope){
	$scope.greeting = 'Hello';
}]);