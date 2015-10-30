Array.prototype.transpose = function() {
  var result = new Array(this[0].length);
  for (var i = 0; i < this[0].length; i++) {
    result[i] = new Array(this.length);
  };

  for (var j = 0; j < this[0].length; j++) {
    for (var k = 0; k < this.length; k++) {
      result[j][k] = this[k][j];
    };
  };

  return result
};

function Board() {
  this.grid = [["X","X","X"],
               [null,null,null],
               [null,null,null]];
  this.winner = null;

  this.validMove = function (x,y){
    if (typeof (this.grid[x][y]) === "null" ) {
      return true;
    } else {
      return false;
    }
  };

  this.anyoneWonYet = function () {
    this.wonHelperRows();
    this.wonHelperCols();
    this.wonHelperDiagonals();

    if (this.winner === null){
      return false;
    } else {
      return true;
    }
  };

  this.wonHelperRows = function () {
    this.grid.forEach(checkTriple);
  };

  this.wonHelperCols = function () {
    transposedGrid = this.grid.transpose();

    transposedGrid.forEach(checkTriple);
  };

  this.wonHelperDiagonals = function () {
    var diag1 = [];
    var diag2 = [];

    for (var i = 0; i < 3; i++) {
      diag1.push(this.grid[i][i]);
      diag2.push(this.grid[2 - i][i]);
    };

    [diag1, diag2].forEach(checkTriple);
  };

  var checkTriple = function(arr, _idx, _bigArr) {
    if (JSON.stringify(arr) === '["X","X","X"]') {
      this.winner = "X";
    } else if (JSON.stringify(arr) === '["O","O","O"]') {
      this.winner = "O";
    }
  };

  this.render = function () {
    this.grid.forEach(function (current, _i, _a) {
      console.log(JSON.stringify(current));
    });
  };
};
