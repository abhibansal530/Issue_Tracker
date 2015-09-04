my.controller('loginctrl',['$scope','$http','$state',
function($scope,$http,$state){

	$scope.user={};
	$scope.error=false
	console.log("inside conr")
	$scope.login=function(){
		var url='http://localhost:3000/myusers'
		var details = { myuser: {email: $scope.user.email, password: $scope.user.password}};
		console.log("inside func")
		var user=$scope.user
		$http
		.post(url,details)
		.success(function(data){
			console.log(data.msg);
			if (data.msg == "bye")
				$scope.error=true;
			else
				$state.go('main')
			
			//console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}
	$scope.logout=function(){
		$state.go('home');
	}
}]
);
