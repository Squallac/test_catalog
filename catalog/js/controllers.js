angular
	.module('catalog')
	.controller('HomeCtrl', HomeCtrl)
	.controller('ModalInstanceCtrl', ModalInstanceCtrl);

	function HomeCtrl($scope, $state, $uibModal, images) {
		
		$scope.images = images;		

		$scope.open_modal = function(index) {

			if (index < 0)
				index = 0;
			else if (index >= $scope.images.length)
				index = $scope.images.length - 1;
			
			var selected_image = $scope.images[index];

			var modal_options = {
				animation: true,
				backdrop: true,
				templateUrl: 'myModal.html',
				controller: 'ModalInstanceCtrl',
				resolve: {
					selected_image: function() {
						return selected_image;
					}
				}
			};

			var modal_instance = $uibModal.open(modal_options);

			return index;

		};		
	}

	function ModalInstanceCtrl($scope, selected_image) {
		$scope.selected_image = selected_image;
	}
