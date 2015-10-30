var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback) {
  var f = function (n) {
    var input = parseInt(n);
    sum += input;
    console.log(sum);

    addNumbers(sum, numsLeft - 1, completionCallback);
  };
  if (numsLeft > 0) {
    reader.question("What is your number?", f)
  } else {
    completionCallback(sum);
  }



  // if (numsLeft > 0) {
  //   reader.question("What is your number?", function (answer) {
  //     var input = parseInt(answer);
  //     sum += input;
  //     console.log(sum);
  //
  //     addNumbers(sum, numsLeft - 1, completionCallback);
  //   });
  // } else {
  //   completionCallback(sum);
  // }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
