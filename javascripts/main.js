var app = angular.module("Minesweeper", []);

app.controller("MinesweeperController", function ($scope) {

	function createMinefield() {
		var minefield = {};
		minefield.rows = [];

		for (var i = 0; i < 9; i++) {
			var row = {};
			row.spots = [];

			for (var j = 0; j < 9; j++) {
				var spot = {};
				spot.isRevealed = true;
				row.spots.push(spot);
			}

			minefield.rows.push(row);
		}
		return minefield;
	}

	$scope.minefield = createMinefield();
});