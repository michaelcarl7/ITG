'use strict';
	
/* Query REST service for graph data */
angular.module('itgticketApp')
  .factory('Tickets', ['$resource', '$rootScope', function($resource, $rootScope) { 
	var getTickets = $resource('http://esbdw4701.nbc.local:5555/rest/NBC_CRM/RServices/Tickets/000135',
	{ post: {method: 'POST'}, 
	get: {method: 'GET'}, 
	update: {method:'PUT'}, 
	query: {method:'GET'}});
	return getTickets;
  }]);
