describe('dopeDogg', function() {

  var dopeDogg, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dopeDogg = new DopeDogg(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dopeDogg.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(dopeDogg, 'step');
      expect(dopeDogg.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(dopeDogg.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(dopeDogg.step.callCount).to.be.equal(2);
    });
  });
});