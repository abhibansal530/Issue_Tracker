
my.controller('mainctrl',['$scope','$http','user_details','$cookies','$cookieStore',
	function($scope,$http,user_details,$cookies,$cookieStore)
	{
		//var $scope.projects=new Array();
		var url= "http://localhost:3000/getproject";
		$cookies.email=$cookieStore.get('user_email')
		console.log($cookies.email)
		//console.log(user_details.getEmail().email)
		$http({
			url: url,
			method : "GET",
			isArray: true,
			params: {owner_id : $cookieStore.get('user_email') }
		})
		.success(function(data){
			$scope.ps= data.projects;
			console.log(data)
			//console.log($scope.projects)
			//for (a in data.project){
			//	console.log(a.project);
			//}
		})
		.error(function(data){
			console.log("error found")
		})
	}]);