jest.dontMock('../lib/racetrack-ipsum');

describe('racetrackIpsum', () => {
  let racetrackIpsum = require('../lib/racetrack-ipsum');

  describe('randomInteger', () => {
    it('gives a random integer between the specified numbers', () => {
      var rando = racetrackIpsum.randomInteger(1,2);
      expect(rando.toBeGreaterThan(0) && rando.toBeLessThan(3));
    });
  });
});
