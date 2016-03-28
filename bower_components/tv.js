angular
    .module('tv', ["slick"])
    .controller('tvcontrol', tvcontrol)
    .directive('channel', function() {
	    return {
		    restrict: 'EA',
		    scope: { code:'@code' },
	    	template: '<iframe width="560" height="315" src="http://www.filmon.tv/tv/channel/export?channel_id=713" frameborder="0" allowfullscreen> </iframe>'
		};
	})

function tvcontrol($rootScope, $window, $location, $scope, $timeout, $compile) {
	$scope.myTV=[];

	$scope.sports = [
		{
			"id" 		: 	1,
			"title"		: 	"UFC Sport",
			"img"		: 	"http://media.ufc.tv/logos/logo-baja.png",
			"channel_id": 	"713"
		},
		{
			"id" 		: 	2,
			"title"		: 	"ESPN",
			"img"		: 	"http://worldsoccertalk.com/wp-content/uploads/2008/04/espn-deportes-logo.jpg",
			"channel_id": 	""
		},
		{
			"id" 		: 	3,
			"title"		: 	"Universal Sport",
			"img"		: 	"https://lh4.googleusercontent.com/-2fNnWrTMcMA/TYtJuGu4lJI/AAAAAAAAAF4/jbQR6Hj8-gk/s1600/universal_sports.png",
			"channel_id": 	""
		},
		{
			"id" 		: 	4,
			"title"		: 	"Fox Sport 3",
			"img"		: 	"https://www.foxtel.com.au/content/dam/foxtel/shared/channel/FS3/fox-sports-3-colour.png",
			"channel_id": 	""
		},
		{
			"id" 		: 	5,
			"title"		: 	"ESPN 3",
			"img"		: 	"http://espnmediazone.com/us/files/2012/04/ESPN3-Logo.jpg",
			"channel_id": 	""
		},
		{
			"id" 		: 	6,
			"title"		: 	"ESPN 2",
			"img"		: 	"http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/56/be/espn_5.jpg?itok=rMMf-XL9",
			"channel_id": 	""
		}
	];
	$scope.movies = [
		{
			"id" 		: 	1,
			"title"		: 	"Movie Loft TV",
			"img"		: 	"http://static.wixstatic.com/media/dfeb20_f3dea740ea9443d1a5fb4521c29f5731.png/v1/fill/w_148,h_90,al_c,lg_1/dfeb20_f3dea740ea9443d1a5fb4521c29f5731.png",
			"channel_id": 	"2719"
		},
		{
			"id" 		: 	2,
			"title"		: 	"Cultra TV",
			"img"		: 	"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTDIQh4mQ-pHWEzzMerz-tmRuTAB8qIvvYtFiLFyXMavE8AqvESljiVCIhH",
			"channel_id": 	"336"
		},
		{
			"id" 		: 	3,
			"title"		: 	"Hallmark",
			"img"		: 	"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Hallmark_Movie_Channel.svg/800px-Hallmark_Movie_Channel.svg.png",
			"channel_id": 	""
		},
		{
			"id" 		: 	4,
			"title"		: 	"Sony",
			"img"		: 	"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEzes0Xy4U0xBQMW9kF5_XqWJkTy0h_5Ht9QrSFNZXapteVx8M",
			"channel_id": 	""
		},
		{
			"id" 		: 	5,
			"title"		: 	"FX",
			"img"		: 	"http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/3b/75/3b75b9ee0d309c224fdac377ed6bfb2d.png?itok=UH4-D51Z",
			"channel_id": 	""
		}
	];

	var vm = this;
	$rootScope.viewData = [];
	$rootScope.viewLoaded = true;


	// $rootScope.delete = function (channel){
	// 	for (var i = 0; i < $scope.nUsers; i++)
	//     if ($scope.users[i].id == id) { 
	//     	$scope.users.splice(i, 1);
	// 	    break;
 //         }   
	// }

	$rootScope.addChannel = function(channel) {
		$rootScope.viewLoaded = false;
		$rootScope.viewData.push(channel);
		$timeout(function() {
	        $rootScope.viewLoaded = true;
	    }, 10);
	 };

	 $scope.slickPanels = {
	    method: {},
	    dots:false,
	    infinite: false,
	    speed: 300,
	    autoPlay: false,
	    event: {
	        beforeChange: function() {
	        	console.log("before change called");
	        },
	        afterChange: function() {
	        	console.log("after called");
	        }
	   	}
	};


	  $scope.video = {	
	    youtubeid: '2K8_jgiNqUc'
	  }
	  $scope.getUrl = function (id) {
	    return '//www.youtube.com/embed/'+id+'?rel=0'
	  }
	  $scope.url = $scope.getUrl('2K8_jgiNqUc')
	  


};

// SlickController.$inject = ["$rootScope", "$window", "$location", "$scope", "$timeout", "$compile"];
