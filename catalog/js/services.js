angular
	.module('catalog')
	.factory('ImageService', ImageService);

	function ImageService($http) {
				
		function get_all_images() {
			
			var url = 'https://pixabay.com/api/?key=3943577-9b47c49179854d2cd557fa37a&q=dog&image_type=photo';
			
			return $http.get(url).then(function(response){
				
				response = response.data; 
				
				return response;
			});
		}

		return {			
			get_all_images: get_all_images
		}
	};

