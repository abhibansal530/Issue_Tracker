my.controller('createProject',['$scope','$http','$state',"user_details",'$cookies','$cookieStore',
	function($scope,$http,$state,user_details){
		$scope.project={};
		console.log("inside createProject")
		$scope.insert_project=function(){
			console.log("clicked")
			var url="http://localhost:3000/createproject"
			//console.log(user_details.getEmail().email)
			var details={project: {owner_id: $cookieStore.get('user_email'), name: $scope.project.name, description: $scope.project.description, permission: $scope.project.type}}
			console.log(details)
			$http
			.post(url,details)
			.success(function(data){
				$state.go('main');

			})
			.error(function(data){
				console.log("error")
			})
		}
	}
	]);