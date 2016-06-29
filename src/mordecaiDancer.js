var MordecaiDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
var img = $('<img class = "mordecai" src="src/mordecaiPic.png"></img>');
  // this.$node = $('<span> <img class = "mordecai" src="src/mordecaiPic.png"></img> </span>');

  // this.setPosition(top, left, timeBetweenSteps)
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
 };
  MordecaiDancer.prototype = Object.create(Dancer.prototype);
  MordecaiDancer.prototype.constructor = MordecaiDancer;
 
  MordecaiDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step

    Dancer.prototype.step.call(this);
    
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
    this.$node.removeClass("dancer").addClass("mordecai").fadeToggle()
  };