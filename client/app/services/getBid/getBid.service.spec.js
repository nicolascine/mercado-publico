'use strict';

describe('Service: getBid', function () {

  // load the service's module
  beforeEach(module('mercadoPublicoApp'));

  // instantiate service
  var getBid;
  beforeEach(inject(function (_getBid_) {
    getBid = _getBid_;
  }));

  it('should do something', function () {
    expect(!!getBid).toBe(true);
  });

});
