Function.prototype.myBind = function (context) {

  var fn = this;
  console.log (this, fn);

  return (function () {
    fn.apply(context);
  });
};
var cat = {
  name: "Sennacy" ,

   stuff: function () {
    console.log(this.name);
    return "I'm a Cat";
  }
};

var outsideName = cat.stuff.myBind(cat);

outsideName();
