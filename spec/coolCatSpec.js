describe('coolCat', function() {

  var coolCat, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    coolCat = new CoolCat(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(coolCat.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a mouseover handler', function() {
    expect(coolCat.$node)
  })

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(coolCat, 'step');
      expect(coolCat.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(coolCat.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(coolCat.step.callCount).to.be.equal(2);
    });
  });
});