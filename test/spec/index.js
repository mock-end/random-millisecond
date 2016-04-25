var expect = require('chai').expect;

describe('random-millisecond: ', function () {

  var randomMillisecond = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomMillisecond()).to.be.within(0, 999);
      expect(randomMillisecond({ min: 100 })).to.be.within(100, 999);
      expect(randomMillisecond({ max: 100 })).to.be.within(0, 100);
    }
  });
});
