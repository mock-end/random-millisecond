var expect = require('chai').expect;

describe('random-millisecond: ', function () {

  var randomMillisecond = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomMillisecond()).to.be.within(0, 999);
    }
  });
});
