my.controller('loginctrl',['$scope','$http','$state','user_details','$cookies','$cookieStore',
function($scope,$http,$state,user_details,$cookies,$cookieStore){
	$scope.user={};
	$scope.error=false
	console.log("inside conr")
	$cookieStore.remove('user_email')
	console.log($cookieStore.get('user_email'))
	//console.log($cookies.name)
	$scope.login=function(){
		var url='http://localhost:3000/myusers'
		var details = { myuser: {email: $scope.user.email, password: $scope.user.password}};
		//console.log("inside func")
		var user=$scope.user
		$http
		.post(url,details)
		.success(function(data){
			console.log(data.msg);
			if (data.msg == "bye")
				$scope.error=true;
			else
				{
					//user_details.setEmail($scope.user.email);
					$cookieStore.put('user_email',$scope.user.email)

					$state.go('main');	
					}	//console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}
	$scope.logout=function(){
		$cookieStore.remove('user_email')
		$state.go('home');
	}
}]
);
