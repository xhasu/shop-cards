(function(){

	angular
		.module('app', [])

	angular
		.module('app')
		.controller('cardsController', cardsController)

	cardsController.$inject = [];

	function cardsController() {

		var vm = this;

		vm.data = [
			{'id': 1, 'category': 'Nike', 'type': 'Air Jordan 13', 'media': 'img/air-jordan13-retro.webp'},
			{'id': 2, 'category': 'Nike', 'type': 'Air Jordan 5', 'media': 'img/air-jordan5-retro.webp'},
			{'id': 3, 'category': 'Nike', 'type': 'Jordan Basketball', 'media': 'img/jordan-basketball.webp'},
			{'id': 4, 'category': 'Nike', 'type': 'Kyrie 6 Basketball', 'media': 'img/kyrie6-basketball.webp'},
			{'id': 5, 'category': 'Nike', 'type': 'Zoom Moc', 'media': 'img/zoom-moc.webp'},
		];

	};
	
})();