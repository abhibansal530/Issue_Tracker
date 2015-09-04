var my=angularjs.module('myapp',['ngRoute','ui.router'])
.config(function($routeProvider,$httpProvider){
	$routeProvider.when('/login',{
		templateUrl : 'login.html' ,
		controller : 'loginctrl'
	})
	.otherwise('/login');
});