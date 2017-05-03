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

// Task 1:

const data = require('./data');

var m = data.mcDonalds.dailySales
var b = data.burgerKing.dailySales
var w = data.wendys.dailySales


var sum1 = m.reduce((a, c) => a + c, 0);
var sum2 = b.reduce((a, c) => a + c, 0);
var sum3 = w.reduce((a, c) => a + c, 0);

var avg1 = sum1 / m.length
var avg2 = sum2 / b.length
var avg3 = sum3 / w.length

// Task 2:

sqDif1 = m.map(function(x){
  return (x - avg1)**2
})
sqDif2 = b.map(function(x){
  return (x - avg2)**2
})
sqDif3 = w.map(function(x){
  return (x - avg3)**2
})

var sqSum1 = sqDif1.reduce((a,c) => a + c, 0);
var sqSum2 = sqDif2.reduce((a,c) => a + c, 0);
var sqSum3 = sqDif3.reduce((a,c) => a + c, 0);

var stdv1 = Math.sqrt(sqSum1 / m.length);
var stdv2 = Math.sqrt(sqSum2 / b.length);
var stdv3 = Math.sqrt(sqSum3 / w.length);


// Task 3:

var results = [Math.round(stdv1), Math.round(stdv2), Math.round(stdv3)].sort()

// Task 4:

module.exports.results = results
