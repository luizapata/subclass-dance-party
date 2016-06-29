// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this._top = top;
  this._left = left;
  this.step();
  this.setPosition(this._top, this._left);
 };

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this),  this._timeBetweenSteps)
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // setTimeout(this.step.bind(this), this._timeBetweenSteps);
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //