var DopeDogg = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('dopedogg');
};

DopeDogg.prototype = Object.create(MakeDancer.prototype);
DopeDogg.prototype.constructor = DopeDogg;

DopeDogg.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

DopeDogg.prototype.lineup = function(top, left) {
  this.setPosition(top, left);
};