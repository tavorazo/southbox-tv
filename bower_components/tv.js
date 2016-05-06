angular
    .module('tv', ["slick"])
    .controller('tvcontrol', tvcontrol)




function tvcontrol($rootScope, $window, $location, $scope, $timeout, $compile, $sce) {
    $scope.customUrl = $sce.trustAsResourceUrl('');


	$rootScope.myTV=[];

	$scope.prueba = [
		{
			"id":"prueba1",
			"title": "TVC Latino",
			"img": "https://static.filmon.com/assets/channels/213/big_logo.png",
			"url": "http://cinestrenostv.tv/acanal/1.html"

		},
		{
			"id": "prueba2",
			"title": "EDGE sports",
			"img": "https://static.filmon.com/assets/channels/4325/big_logo.png",
			"url":"https://www.filmon.com/tv/channel/export?channel_id=4325&autoPlay=1"
		},

		{
			"id": "prueba3",
			"title": "Telenovelas TV",
			"img": "https://static.filmon.com/assets/channels/2624/big_logo.png",
			"url":"https://www.filmon.com/tv/channel/export?channel_id=2624&autoPlay=1"
		}
	];

	$scope.sports = [
		{
			"id" 		: 	"sport-1",
			"title"		: 	"ESPN",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/2a6e5f72cc53efecea1966d34f296d.gif",
			"url" 		: 	"http://tutvgratis.tv/embed/tutv?chid=198"
		},
		{
			"id" 		: 	"sport-2",
			"title"		: 	"ESPN HD",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/1071444b38467e091a0b3966033fa1.gif",
			"url"		: 	"http://tutvgratis.tv/embed/tutv?chid=181"
		},
		{
			"id" 		: 	"sport-3",
			"title"		: 	"ESPN 2",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/db750cc1079f67d5985478b2e71ed6.gif",
			"url"		: 	"http://tutvgratis.tv/embed/tutv?chid=160"
		},
		{
			"id" 		: 	"sport-4",
			"title"		: 	"ESPN 3",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/76611b29120fd8f7592098b1e0cc8a.gif",
			"url" 		: 	"http://tutvgratis.tv/embed/tutv?chid=159"
		},
		{
			"id" 		: 	"sport-5",
			"title"		: 	"Fox Sport 2",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/03464ed3729ce34b24878862f2ba8c.gif",
			"url" 		: 	"http://tutvgratis.tv/embed/tutv?chid=88"
		},
		{
			"id" 		: 	"sport-6",
			"title"		: 	"Fox Sport HD",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/53c1adcfae46e1ac642e303f3384ba.gif",
			"url" 		: 	"http://tutvgratis.tv/embed/tutv?chid=47"
		}
	];
	$scope.movies = [
		{
			"id" 		: 	"mv-2",
			"title"		: 	"Sony TV",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/b50891d873f9cbaa74acc7efb6d44e.gif",
			"url"		: 	"http://tutvgratis.tv/embed/tutv?chid=27"
		},
		{
			"id" 		: 	"mv-3",
			"title"		: 	"TNT HD",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/6544597c5fb07f3ae253dc55f703aa.gif",
			"url"		: 	"http://tutvgratis.tv/embed/tnt"
		},
		{
			"id" 		: 	"mv-4",
			"title"		: 	"Universal Channel",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/78cd39d31a66bea6387e5591d278cd.gif",
			"url"		: 	"http://tutvgratis.tv/embed/tutv?chid=15"
		},
		{
			"id" 		: 	"mv-5",
			"title"		: 	"Space",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/84910a9bc220f2de423cff30807ade.gif",
			"url"		: 	"http://tutvgratis.tv/embed/tutv?chid=18"
		},
		{
			"id" 		: 	"mv-5",
			"title"		: 	"Space",
			"img"		: 	"http://tutvgratis.tv/media/uploads/2015/01/79415545eed2532b70c33bbc6ac8b6.gif",
			"url"		: 	"http://tutvgratis.tv/embed/tutv?chid=24"
		}
	];
	$scope.mexico = [
		{
			"id"		: 	"mx-1",
			"title" 	: 	"Canal 5",
			"img" 		: 	"http://tutvgratis.tv/media/uploads/2015/01/20e612bec361214fdd9915817823d2.gif",
			"url"		: 	"http://tutvgratis.tv/embed/tutv?chid=77"
		},
		{
			"id"		: 	"mx-2",
			"title" 	: 	"Telehit",
			"img" 		: 	"http://tutvgratis.tv/media/uploads/2015/01/1388126d0e586f960dff8c0919292a.gif",
			"url"		: 	"http://tutvgratis.tv/embed/telehit"
		},
		{
			"id"		: 	"mx-3",
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
		console.log("el canal es", $rootScope.myTV.length);
		$scope.check = false;
		$rootScope.viewLoaded = false;
		for (var i = 0; i < $rootScope.myTV.length; i++) {
			console.log("for " + i + " " + $scope.check);
			if ($rootScope.myTV[i].id == channel.id ) {
				$scope.check = true;
				console.log("entro" + $scope.check);
				break;
			}
		}

		if (!$scope.check) {
			console.log("entro2");
			$rootScope.myTV.push(channel);
			// channel.botonAdd = "";
		}	
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