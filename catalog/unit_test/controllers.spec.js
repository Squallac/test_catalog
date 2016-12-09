
describe('Homecontroller', function() {
	
	//Stubbing images
	var images = [
		{
			previewUrl: 'http://google.com',
			tags: 'perro, gato'
		},
		{
			previewUrl: 'http://google.com',
			tags: 'jirafa, raton'
		},
		{
			previewUrl: 'http://google.com',
			tags: 'jirafa, perro'
		}
	];

	beforeEach(module('catalog'));	

	beforeEach(inject(function(_$controller_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));

	describe('$scope.open_modal', function() {

		it('has to set index to 0 when index < 0', function() {

			var $scope = {};		

			var controller = $controller('HomeCtrl', { 
				$scope: $scope,
				images: images
			});

			var index = $scope.open_modal(-1);

			expect(index).toBe(0);
		});

		it('has to set index to the last image index when index >= images.length', function() {

			var $scope = {};		

			var controller = $controller('HomeCtrl', { 
				$scope: $scope,
				images: images
			});

			var index = $scope.open_modal(20);

			console.log(index);

			expect(index).toBe(images.length - 1);
		});

		it('has to set index the requested index if it is valid', function() {

			var $scope = {};		

			var controller = $controller('HomeCtrl', { 
				$scope: $scope,
				images: images
			});

			var index = $scope.open_modal(1);

			console.log(index);

			expect(index).toBe(1);
		});
	});
});