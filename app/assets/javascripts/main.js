var my=angular.module('myapp',['ngRoute']);
my.config(function($routeProvider){
	$routeProvider.when("/",
	{
		templateUrl: "",
		controller: ""
	}
	)
	.otherwise({
		template: "Not set"
	});
})