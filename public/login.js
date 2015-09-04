my.controller('loginctrl',['$scope','$http',
function($scope,$http){

	$scope.user={};
	console.log("inside conr")
	$scope.login=function(){
		var url='http://localhost:3000/myusers'
		var details = { myuser: {email: $scope.user.email, password: $scope.user.password}};
		console.log("inside func")
		var user=$scope.user
		$http
		.post(url,details)
		.success(function(data){
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}
}]
);
