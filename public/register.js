my.controller('regcntrl',['$scope','$http','$state',
	function($scope,$http,$state){
		$scope.user={};
		$scope.available=false
		console.log("inside regcntrl")
		$scope.register=function(){
			var url ='http://localhost:3000/myusers/register'
			var details = { myuser: {email: $scope.user.email, name: $scope.user.name, password: $scope.user.password}};
			console.log("inside reg func.")
			$http
			.post(url,details)
			.success(function(data){
				//console.log(data)
				//console.log("registered")
				if(data.msg=="registered")
					$scope.available=true
				else
					$state.go('main');

			})
			.error(function(data){
				console.log(data)
				console.log("error")
			})
		}
	}]);