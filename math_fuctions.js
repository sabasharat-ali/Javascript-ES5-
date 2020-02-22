//to round of a number
var expression = 20/3
var roundof=Math.round(expression);
console.log(roundof);

//to force a number to round up only
var number = 0.00001;
var ceiling= Math.ceil(number);
console.log(ceiling);

//to force a number to round down only
var number1 = 0.999999999999;
var floor= Math.floor(number1);
console.log(floor);

//generating random numbers
var decNumber=Math.random()
var randomNum=(decNumber*5)
console.log(randomNum);

// var question = "Your species?";
//  var defaultAnswer = "human";
//  var spec = prompt(question, defaultAnswer)

 //controlling the length of decimal
 var cost=9.12;
 var salesTax=1.34;

 var actualPrice=cost+(cost *(salesTax/100));
 //this function is controlling the number of digits after the decimal point
  actualPrice=actualPrice.toFixed(2)
 console.log(actualPrice)

