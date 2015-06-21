var app = angular.module("incrementer", [])
	.directive('upVote', function() {
		return {
			restrict: 'E',
			scope: {
				min: '=',
				max: '=',
				value: '='
			},
			template: '<div>' +
			'<button ng-click="value = value + 1" ng-disabled="value >= max">+</button>' +
			'<span>{{value}}</span>' +
			'<button ng-click="value = value - 1" ng-disabled="value <= min">-</button>' +
			'</div>'
		}
	});

	function controller($scope) {
		$scope.model = {
			min: 0,
			max: 3,
			value: 1
		}
	}