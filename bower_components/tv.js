angular
    .module('tv', ["slick"])
    .controller('tvcontrol', tvcontrol)
    .directive('channel', function() {
	    return {
		    restrict: 'EA',
		    scope: { code:'@code' },
	    	template: '<iframe class="embed-responsive-item" name="reloadi" src="http://tutvgratis.tv/embed/bandamax" scrolling="no" data-checked="true"></iframe>'
		};
	})



function tvcontrol($rootScope, $window, $location, $scope, $timeout, $compile, $sce) {
    $scope.customUrl = $sce.trustAsResourceUrl('http://tutvgratis.tv/embed/tutv?chid=77');


	$rootScope.myTV=[];

	$scope.sports = [
		{
			"id" 		: 	1,
			"title"		: 	"UFC Sport",
			"img"		: 	"http://media.ufc.tv/logos/logo-baja.png",
			"botonAdd"	: 	"https://cdn0.iconfinder.com/data/icons/round-ui-icons/128/add_green.png",
			"url" 		: 	""
		},
		{
			"id" 		: 	2,
			"title"		: 	"ESPN",
			"img"		: 	"http://worldsoccertalk.com/wp-content/uploads/2008/04/espn-deportes-logo.jpg",
			"botonAdd"	: 	"https://cdn0.iconfinder.com/data/icons/round-ui-icons/128/add_green.png",
			"url"		: 	""
		},
		{
			"id" 		: 	3,
			"title"		: 	"Universal Sport",
			"botonAdd"	: 	"https://cdn0.iconfinder.com/data/icons/round-ui-icons/128/add_green.png",
			"img"		: 	"https://lh4.googleusercontent.com/-2fNnWrTMcMA/TYtJuGu4lJI/AAAAAAAAAF4/jbQR6Hj8-gk/s1600/universal_sports.png",
			"url"		: 	""
		},
		{
			"id" 		: 	4,
			"title"		: 	"Fox Sport 3",
			"botonAdd"	: 	"https://cdn0.iconfinder.com/data/icons/round-ui-icons/128/add_green.png",
			"img"		: 	"https://www.foxtel.com.au/content/dam/foxtel/shared/channel/FS3/fox-sports-3-colour.png",
			"url": 	""
		},
		{
			"id" 		: 	5,
			"title"		: 	"ESPN 3",
			"botonAdd"	: 	"https://cdn0.iconfinder.com/data/icons/round-ui-icons/128/add_green.png",
			"img"		: 	"http://espnmediazone.com/us/files/2012/04/ESPN3-Logo.jpg",
			"url": 	""
		},
		{
			"id" 		: 	6,
			"title"		: 	"ESPN 2",
			"botonAdd"	: 	"https://cdn0.iconfinder.com/data/icons/round-ui-icons/128/add_green.png",
			"img"		: 	"http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/56/be/espn_5.jpg?itok=rMMf-XL9",
			"url": 	""
		}
	];
	$scope.movies = [
		{
			"id" 		: 	1,
			"title"		: 	"Movie Loft TV",
			"img"		: 	"http://static.wixstatic.com/media/dfeb20_f3dea740ea9443d1a5fb4521c29f5731.png/v1/fill/w_148,h_90,al_c,lg_1/dfeb20_f3dea740ea9443d1a5fb4521c29f5731.png",
			"url"		: 	""
		},
		{
			"id" 		: 	2,
			"title"		: 	"Cultra TV",
			"img"		: 	"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTDIQh4mQ-pHWEzzMerz-tmRuTAB8qIvvYtFiLFyXMavE8AqvESljiVCIhH",
			"url"		: 	""
		},
		{
			"id" 		: 	3,
			"title"		: 	"Hallmark",
			"img"		: 	"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Hallmark_Movie_Channel.svg/800px-Hallmark_Movie_Channel.svg.png",
			"url": 	""
		},
		{
			"id" 		: 	4,
			"title"		: 	"Sony",
			"img"		: 	"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEzes0Xy4U0xBQMW9kF5_XqWJkTy0h_5Ht9QrSFNZXapteVx8M",
			"url": 	""
		},
		{
			"id" 		: 	5,
			"title"		: 	"FX",
			"img"		: 	"http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/3b/75/3b75b9ee0d309c224fdac377ed6bfb2d.png?itok=UH4-D51Z",
			"url": 	""
		}
	];
	$scope.mexico = [
		{
			"id"		: 	1,
			"title" 	: 	"Canal 5",
			"img" 		: 	"http://tutvgratis.tv/media/uploads/2015/01/20e612bec361214fdd9915817823d2.gif",
			"url"		: 	"http://tutvgratis.tv/embed/tutv?chid=77"
		},
		{
			"id"		: 	2,
			"title" 	: 	"Telehit",
			"img" 		: 	"http://tutvgratis.tv/media/uploads/2015/01/1388126d0e586f960dff8c0919292a.gif",
			"url"		: 	"http://tutvgratis.tv/embed/telehit"
		},
		{
			"id"		: 	3,
			"title" 	: 	"Canal de las estrellas",
			"img" 		: 	"http://tutvgratis.tv/media/uploads/2015/01/40610ece47b4e8668210055af4381d.gif",
			"url"		: 	"http://tutvgratis.tv/embed/tutv?chid=69"
		}

	];
	
	var vm = this;
	$rootScope.viewData = [];
	$rootScope.viewLoaded = true;

	$scope.play = function(url){
    	$scope.customUrl = $sce.trustAsResourceUrl(url);
	};

	$rootScope.addChannel = function(channel) {
		$rootScope.viewLoaded = false;
		$rootScope.myTV.push(channel);
		channel.botonAdd = "";
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

	$rootScope.removeChannel = function(channel, lista){
		$rootScope.viewLoaded = false;
		for (var i = 0; i < lista.length; i++)
        if (lista[i].id == channel.id) { 
		    lista.splice(i, 1);
		    break;
	    }   
	    $timeout(function() {
	        $rootScope.viewLoaded = true;
	    }, 10);

	};

};