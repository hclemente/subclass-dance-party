var CoolCat = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

CoolCat.prototype = Object.create(MakeDancer.prototype);
CoolCat.prototype.constructor = CoolCat;

CoolCat.prototype.step = function() {
  CoolCat.prototype.step.call(this);
  this.$node.toggle();
};