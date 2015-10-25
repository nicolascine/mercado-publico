'use strict';

describe('Controller: BidsCtrl', function () {

  // load the controller's module
  beforeEach(module('mercadoPublicoApp'));

  var BidsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BidsCtrl = $controller('BidsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
