function Clock () {
  this.currentTime = new Date();
}

Function.prototype.myBind = function (context) {

  var fn = this;

  return (function () {
    fn.apply(context);
  });
};

Clock.TICK = 5000;

Clock.prototype.printTime = function () {
  console.log (this.currentTime.getHours() + ":" +
    this.currentTime.getMinutes() + ":" +
    this.currentTime.getSeconds());
};

Clock.prototype.run = function () {
  this.currentTime = new Date();
  this.printTime();
  setInterval(this._tick.myBind(this), Clock.TICK)
  // 3. Schedule the tick interval.
};

Clock.prototype._tick = function () {
  // console.log(this);
  this.currentTime = new Date(this.currentTime.getTime() + 5000);
  this.printTime();
};

var clock = new Clock();
clock.run();
