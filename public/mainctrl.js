
my.controller('mainctrl',['$scope','$http','user_details',
	function($scope,$http,user_details)
	{
		var url= "http://localhost:3000/projects";
		console.log(user_details.getEmail().email)
		$http({
			url: url,
			method : "GET"
			//data: {owner_id : user_details.getEmail().email }
		})
		.success(function(data,status,headers,config){
			console.log(data)
			$scope.projects= data;
		})
		.error(function(data){
			console.log("error found")
		})
	}]);