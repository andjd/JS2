var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var askIfGreaterThan = function (el1, el2, callback) {
  var parseAnswer = function (answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  };
  reader.question(("Is " + el1 + " greater than " + el2 + "?"), parseAnswer);
}

var innerBubbleLoop = function (arr, i, madeAnySwaps, outerBubbleLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {

      if (isGreaterThan) {
        madeAnySwaps = true;
        var tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;

      }
      innerBubbleLoop(arr, i+1, madeAnySwaps, outerBubbleLoop);
    });

  } else {
    outerBubbleLoop(madeAnySwaps);
  }
};

var absurdBubbleSort = function(arr, sortCompletionCallback) {
  var outerBubbleLoop = function (madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleLoop(arr, 0, false, outerBubbleLoop);
    } else {
      sortCompletionCallback(arr);
    }
  };

  outerBubbleLoop(true);
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
