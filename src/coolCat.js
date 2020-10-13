var CoolCat = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('coolcat');
};

CoolCat.prototype = Object.create(MakeDancer.prototype);
CoolCat.prototype.constructor = CoolCat;

CoolCat.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};