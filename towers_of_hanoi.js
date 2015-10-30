var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function TowersOfHanoi() {
  this.stacks = [[3,2,1],[],[]];

  this.isWon = function (){
    console.log("isWon");
    debugger
    if ((JSON.stringify(this.stacks[1]) === JSON.stringify([3,2,1])) ||
       (JSON.stringify(this.stacks[2]) === JSON.stringify([3,2,1])))  {
         return true ;
    } else {
      return false ;
    }
  };

  this.isValidMove = function (startTowerIndex, endTowerIndex) {
    console.log("isValidMove");

    if (this.stacks[startTowerIndex].slice(-1) <
        this.stacks[endTowerIndex].slice(-1)) {
          return true;
    } else if (!this.stacks[endTowerIndex].length) {
          return true;
    } else {
      return false;
    }
  };

  this.print = function () {
    for (var col=2; col >= 0; col--) {
      var filled_row = [];

      for (var row=0; row < 3; row++) {
        filled_row.push(this.stacks[row][col]);
      };
      console.log("[" + filled_row.map(function(obj) {
        if (obj) {
          return obj;
        } else {
          return " ";
        }
      }).join(" ") + "]");
    };
  };

  this.promptMove = function (callback, completeCallback) {
    console.log("promptMove");

    this.print();
    reader.question("Input from tower: ", function (fromTowerStr) {
      reader.question("Input to tower: ", function (toTowerStr) {
        var fromTowerIdx = parseInt(fromTowerStr);
        var toTowerIdx = parseInt(toTowerStr);

        callback(fromTowerIdx, toTowerIdx, completeCallback);
      });
    });
  };

  this.move = function (startTowerIndex, endTowerIndex, completeCallback) {
    console.log("move");

    if (this.isValidMove(startTowerIndex, endTowerIndex)) {
      this.stacks[endTowerIndex].push(this.stacks[startTowerIndex].pop())
    } else {
      console.log("Invalid Move, Bro");
    }

    this.run(completeCallback);
  }.bind(this);

  this.run = function (completeCallback) {
    console.log("run");
    if (!this.isWon()) {
      this.promptMove(this.move, completeCallback);
    } else {
      completeCallback();
    }
  }.bind(this);
};

var game = new TowersOfHanoi();
game.run(function() {
  console.log("congrats bro!");
  reader.close();
});
