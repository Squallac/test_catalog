
angular
	.module('catalog', [
		'ui.router',
		'ui.bootstrap'
	])

	.config(function($stateProvider, $urlRouterProvider) {
		
		$stateProvider
		
			.state('home', {
				url: '/home',
				templateUrl:'templates/home.html',
				controller: 'HomeCtrl', 
				resolve: {
					images: function(ImageService) {
						
						return ImageService.get_all_images().then(function(response){
							
							response = response.hits;
							
							return response;
						});
					}
				}
			});

		$urlRouterProvider.otherwise('/home');
	});