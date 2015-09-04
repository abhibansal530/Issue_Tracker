my.controller('regcntrl',['$scope','$http',
	function($scope,$http){
		$scope.user={};
		console.log("inside regcntrl")
		$scope.register=function(){
			var url ='http://localhost:3000/myusers/register'
			var details = { myuser: {email: $scope.user.email, name: $scope.user.name, password: $scope.user.password}};
			console.log("inside reg func.")
			$http
			.post(url,details)
			.success(function(data){
				console.log(data)
				console.log("registered")
			})
			.error(function(data){
				console.log(data)
				console.log("error")
			})
		}
	}]);