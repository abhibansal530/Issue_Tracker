var my=angular.module('myapp',['ngRoute']);
my.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("",
	{
		templateUrl: "public/login.html",
		controller: "loginctrl"
	}
	)
	.otherwise({
		template: "Not set"
	});
}])