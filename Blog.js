var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
	$scope.posts = [
		{titre:'First',contenu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacus lectus, rutrum in ante eu, scelerisque egestas libero. Vestibulum ante ipsum primis in faucibus orci. ',date:'1288323659006',love:2},
		{titre:'Second',contenu:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacus lectus, rutrum in ante eu, scelerisque egestas libero. Vestibulum ante ipsum primis in faucibus orci. ',date:'1288323661006',love:-3}
	]
	
	$scope.addPost = function (titre,contenu) {
		var d = new Date()
		$scope.posts.push({'titre':titre,'contenu':contenu,date:d.getTime(),love:0});
	};

});
