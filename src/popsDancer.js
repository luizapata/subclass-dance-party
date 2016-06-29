var PopsDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

 };
  PopsDancer.prototype = Object.create(Dancer.prototype);
  PopsDancer.prototype.constructor = PopsDancer;
 
  PopsDancer.prototype.step = function(){

    Dancer.prototype.step.call(this);
    
    this.$node.removeClass("dancer").addClass("pops").fadeToggle()
  };
