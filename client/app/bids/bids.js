'use strict';

angular.module('mercadoPublicoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bids', {
        url: '/bids',
        templateUrl: 'app/bids/bids.html',
        controller: 'BidsCtrl'
      });
  });