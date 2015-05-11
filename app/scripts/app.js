'use strict';

/**
 * @ngdoc overview
 * @name itgticketApp
 * @description
 * # itgticketApp
 *
 * Main module of the application.
 */
angular
  .module('itgticketApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/Tickets', {
        templateUrl: 'views/Tickets.html',
        controller: 'getTicketsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
