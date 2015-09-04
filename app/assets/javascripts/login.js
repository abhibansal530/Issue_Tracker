my.controller('loginctrl',
function($scope,$http){
	$scope.login=function(){
		var url='http://localhost:3000/myusers'
		var user=$scope.user
		$http
		.get(url,user)
		.success(function(data){
			console.log(data)
		})
		.error(function(data){
			console.log(data)
		})
	}
}
);