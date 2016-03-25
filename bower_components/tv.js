angular.module("tv", ["slick"])

 .controller("channels", function($scope){
	$scope.myTV=[];
	$scope.sports = [
		{
			"id" 	: 	1,
			"title"	: 	"Fox Sport",
			"img"	: 	"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTZFGBdSECwzao4VtbPpgvZmi5a_SRbv25Yj41VbUn-k9qYFHoE",
			"url"	: 	""
		},
		{
			"id" 	: 	2,
			"title"	: 	"ESPN",
			"img"	: 	"http://worldsoccertalk.com/wp-content/uploads/2008/04/espn-deportes-logo.jpg",
			"url"	: 	""
		},
		{
			"id" 	: 	3,
			"title"	: 	"Universal Sport",
			"img"	: 	"https://lh4.googleusercontent.com/-2fNnWrTMcMA/TYtJuGu4lJI/AAAAAAAAAF4/jbQR6Hj8-gk/s1600/universal_sports.png",
			"url"	: 	""
		},
		{
			"id" 	: 	4,
			"title"	: 	"Fox Sport 3",
			"img"	: 	"https://www.foxtel.com.au/content/dam/foxtel/shared/channel/FS3/fox-sports-3-colour.png",
			"url"	: 	""
		},
		{
			"id" 	: 	5,
			"title"	: 	"ESPN 3",
			"img"	: 	"http://espnmediazone.com/us/files/2012/04/ESPN3-Logo.jpg",
			"url"	: 	""
		},
		{
			"id" 	: 	6,
			"title"	: 	"ESPN 2",
			"img"	: 	"http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/56/be/espn_5.jpg?itok=rMMf-XL9",
			"url"	: 	""
		}
	];
	$scope.movies = [
		{
			"id" 	: 	1,
			"title"	: 	"Hallmark",
			"img"	: 	"https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Hallmark_Movie_Channel.svg/800px-Hallmark_Movie_Channel.svg.png",
			"url"	: 	""
		},
		{
			"id" 	: 	2,
			"title"	: 	"Studio Universal",
			"img"	: 	"http://cdn.24.co.za/files/Cms/General/d/1546/660448aa6b5e4b0dbb5ba6b37380e4ae.jpg",
			"url"	: 	""
		},
		{
			"id" 	: 	3,
			"title"	: 	"Urban movie channel",
			"img"	: 	"http://www.blackfilm.com/read/wp-content/uploads/2014/12/Urban-Movie-Channel-logo.jpg",
			"url"	: 	""
		},
		{
			"id" 	: 	4,
			"title"	: 	"Sony",
			"img"	: 	"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEzes0Xy4U0xBQMW9kF5_XqWJkTy0h_5Ht9QrSFNZXapteVx8M",
			"url"	: 	""
		},
		{
			"id" 	: 	5,
			"title"	: 	"FX",
			"img"	: 	"http://cdn2-b.examiner.com/sites/default/files/styles/image_content_width/hash/3b/75/3b75b9ee0d309c224fdac377ed6bfb2d.png?itok=UH4-D51Z",
			"url"	: 	""
		}
	];


	$scope.addChannel = function(channel){
        $scope.myTV.push(channel); //agrego al arreglo de myTV
	}


    $scope.dataLoaded = true;


	$scope.slickConfig = {
	    enabled: true,
	    autoplay: true,
	    draggable: false,  
	    autoplaySpeed: 3000,
	    method: {},
	    event: {
	        beforeChange: function (event, slick, currentSlide, nextSlide) {
	        },
	        afterChange: function (event, slick, currentSlide, nextSlide) {
	        }
	    }
	};
	$scope.slickConfig = {
        enabled: true,
    }
    $scope.toggleSlick = function() {
      $scope.slickConfig.enabled = !$scope.slickConfig.enabled;
    }
    $scope.slickConfig = {
        method: {}
    }
 





 });
