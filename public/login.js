my.controller('loginctrl',['$scope','$http',
function($scope,$http){

	$scope.user={};
	console.log("inside conr")
	$scope.login=function(){
		var url='http://localhost:3000/myusers'

		console.log("inside func")
		var user=$scope.user
		$http
		.post(url,$scope.user)
		.success(function(data){
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}
}]
);