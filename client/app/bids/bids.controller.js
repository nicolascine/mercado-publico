'use strict';

angular.module('mercadoPublicoApp')
  .controller('BidsCtrl', function ($scope, $http) {
    $http.get('/api/bids').success(function(listOfBids) {
      //var _list = JSON.parse(listOfBids);
      $scope.listOfBids = listOfBids;
    });
  });
