var CoolCat = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
};

CoolCat.prototype = Object.create(Dancer.prototype);
CoolCat.prototype.constructor = CoolCat;

CoolCat.prototype.step = function() {
  CoolCat.prototype.step.call(this);
  this.$node.toggle();
};