var DopeDogg = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

DopeDogg.prototype = Object.create(MakeDancer.prototype);
DopeDogg.prototype.constructor = DopeDogg;

DopeDogg.prototype.step = function() {
  DopeDogg.prototype.step.call(this);
  this.$node.toggle();
};
