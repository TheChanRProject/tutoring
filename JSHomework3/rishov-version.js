/**

In this homework, we are going to use code to analyze a weekly sales
competition between Wendy's, McDonald's, and Burger King.

Before starting, make sure you run the following command in the terminal:

npm install -S blessed blessed-contrib

Task 1:

Find the mean (average) of daily sales in the week for Wendy's,
McDonald's, and Burger King.

Task 2: Find the standard deviation of the daily sales in the week
for all three vendors.

Task 3: Present the standard deviations in a separate results.array
and sort from least to greatest.

Task 4: Display your findings in the terminal via the
barchart.js file.

Run the graph in the terminal with the command:

node barchart.js



**/

const data = require('./data.js');

var sum1 = 0;
var sum2 = 0;
var sum3 = 0;

//McDonalds average

  for (var i=0; i<7; i++) {
    sum1 = data.mcDonalds.dailySales[i] + sum1;
  };

avg1 = sum1 / 7;
// console.log(avg1);

//Burger King average

  for (var j=0; j<7; j++) {
    sum2 = data.burgerKing.dailySales[j] + sum2;
  };

avg2 = sum2 / 7;
// console.log(avg2);

//Wendys average

  for (var k=0; k<7; k++) {
    sum3 = data.mcDonalds.dailySales[k] + sum3;
  };

avg3 = sum3 / 7;


// Task 2:

var sqDif1 = 0;
var sqDif2 = 0;
var sqDif3 = 0;

// Squared Difference for McDonalds

for (var a = 0; a < data.mcDonalds.dailySales.length; a++) {
  sqData1 = Math.pow(data.mcDonalds.dailySales[a] - avg1, 2);
  sqDif1 = sqData1 + sqDif1;
}



// Squared Difference for Burger King

for (var b = 0; b < data.burgerKing.dailySales.length; b++) {
  sqData2 = Math.pow(data.burgerKing.dailySales[b] - avg2, 2);
  sqDif2 = sqData2 + sqDif2;
}

// Squared Difference for Wendys

for (var c = 0; c < data.wendys.dailySales.length; c++) {
  sqData3 = Math.pow(data.wendys.dailySales[c] - avg3, 2);
  sqDif3 = sqData3 + sqDif3;
}

var stdv1 = Math.sqrt(sqDif1 / data.mcDonalds.dailySales.length)
var stdv2 = Math.sqrt(sqDif2 / data.burgerKing.dailySales.length)
var stdv3 = Math.sqrt(sqDif3 / data.wendys.dailySales.length)

// Task 3

var results = [Math.round(stdv1), Math.round(stdv2), Math.round(stdv3)].sort()
console.log(results);


// Task 4:

module.exports.results = results;
