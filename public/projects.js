my.controller('allProjects',["$scope","$http"
	,function($scope, $http){
		var url= "http://localhost:3000/allprojects"
		$http({
			url:url,
			method: "GET",
			isArray: true
		})
		.success(function(data){
			console.log(data)
			$scope.as= data.projects;
			console.log($scope.as)
		})
		.error(function(data){
			console.log("error found")
		})
	}]);