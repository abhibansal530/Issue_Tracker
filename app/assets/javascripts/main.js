var my=angular.module('myapp',['ngRoute']);
my.config(function($routeProvider){
	$routeProvider.when("/login",
	{
		templateUrl: "/login.html",
		controller: "loginctrl"
	}
	)
	.otherwise({
		template: "Not set"
	});
})