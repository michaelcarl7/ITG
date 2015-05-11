'use strict';

angular.module('itgticketApp')
	.controller('getTicketsCtrl', function ($scope, $resource, $location, $routeParams, Tickets){
		Tickets.get(function(Result){
			$scope.ITGTicket = Result.number;
		});
	});	



