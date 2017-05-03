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

// Task 1

var sum1 = data.mcDonalds.dailySales.reduce((a,b) => a+b, 0)
var sum2 = data.burgerKing.dailySales.reduce((a,b) => a+b, 0)
var sum3 = data.wendys.dailySales.reduce((a,b) => a+b, 0)

var avg1 = sum1 / data.mcDonalds.length
var avg2 = sum2 / data.burgerKing.length
var avg3 = sum3 / data.wendys.length

// Task 2

var sqDif1 = data.mcDonalds.dailySales.map(function(x){
  return Math.pow(x - avg1, 2)
})

var sqDif2 = data.burgerKing.dailySales.map(function(x){
  return Math.pow(x - avg2, 2)
})

var sqDif3 = data.wendys.dailySales.map(function(x){
  return Math.pow(x - avg3, 2)
})

sqSum1 = sqDif1.reduce((a,b) => a+b,0)
sqSum2 = sqDif2.reduce((a,b) => a+b,0)
sqSum3 = sqDif3.reduce((a,b) => a+b,0)

var stdv1 = Math.sqrt(sqSum1 /data.mcDonalds.dailySales.length)
var stdv2 = Math.sqrt(sqSum2 /data.burgerKing.dailySales.length)
var stdv3 = Math.sqrt(sqSum3 /data.wendys.dailySales.length)




// Task 4

module.exports.results = results


var results = [Math.round(stdv1), Math.round(stdv2), Math.round(stdv3)].sort();

module.exports.results = results;
