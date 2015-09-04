
my.controller('mainctrl',['$scope','$http','user_details','$cookies','$cookieStore',
	function($scope,$http,user_details,$cookies,$cookieStore)
	{
		var url= "http://localhost:3000/projects";
		$cookies.email=$cookieStore.get('user_email')
		console.log($cookies.email)
		//console.log(user_details.getEmail().email)
		$http({
			url: url,
			method : "GET"
			//data: {owner_id : user_details.getEmail().email }
		})
		.success(function(data,status,headers,config){
			//console.log(data)
			$scope.projects= data.projects;
		})
		.error(function(data){
			console.log("error found")
		})
	}]);