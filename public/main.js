var my=angular.module('myapp',['ui.router']);
my.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider)
	{
		$stateProvider.state('login',{
			url:'/login',
			templateUrl:'login.html',
			controller:'loginctrl'
		});
		$stateProvider.state('register',{
			url:'/register',
			templateUrl:'register.html',
			controller:'regcntrl'
		});
		$stateProvider.state('main',{
			url:'/main',
			templateUrl:'main.html'
			//controller:'main'
		});
		$urlRouterProvider.otherwise('/home');
	}]);

