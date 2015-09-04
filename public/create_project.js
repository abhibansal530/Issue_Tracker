my.controller('createProject',['$scope','$http','$state',"user_details",'$cookies','$cookieStore',
	function($scope,$http,$state,user_details,$cookies,$cookieStore){
		$scope.project={};
		console.log("inside createProject")
		console.log($cookieStore.get('user_email'))
		$scope.insert_project=function(){
			console.log("clicked")
			$scope.email=$cookieStore.get('user_email')
			console.log($scope.email)
			var url="http://localhost:3000/createproject"
			//console.log(user_details.getEmail().email)
			var details={project: {owner_id: $scope.email, name: $scope.project.name, description: $scope.project.description, permission: $scope.project.type}}
			console.log(details)
			$http
			.post(url,details)
			.success(function(data){
				console.log(data)
				$state.go('main');

			})
			.error(function(data){
				console.log("error")
			})
		}
	}
	]);