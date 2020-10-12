var DopeDogg = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
};

DopeDogg.prototype = Object.create(Dancer.prototype);
DopeDogg.prototype.constructor = DopeDogg;

DopeDogg.prototype.step = function() {
  DopeDogg.prototype.step.call(this);
  this.$node.toggle();
};
