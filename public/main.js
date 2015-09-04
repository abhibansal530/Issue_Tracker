var my=angular.module('myapp',['ui.router']);
my.service('user_details',function(){
	var user= {};

	return{
		getEmail: function(){return user;},

		setEmail: function(value1){ user.email= value1;} 
	};
})
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
		$stateProvider.state('home',{
			url:'/home',
			templateUrl:'home.html'
		});
		$stateProvider.state('create_project',{
			url:'/create_project',
			templateUrl:'create_project.html',
			controller: 'createProject'
		});
		$urlRouterProvider.otherwise('/home');
	}]);


