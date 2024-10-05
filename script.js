
/* Question 1 : Multiplication Table : */

function multiplicationTable(number) {
    console.log("Multiplication Table for " + number);
    for (let i = 1; i <= 10; i++) {
      console.log(number + " x " + i + " = " + (number * i));
    }
  }
  multiplicationTable(7);




/* Question 2 : Celsius to Fahrenheit Converter :
                formula: Fahrenheit=(Celsius×9/5)+32 

//--------------------Incomplete---------------------//

  function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log("");
*/



  // Question 3 : Positive or Negative Number Checker

  function positiveOrNegative(number) {
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  positiveOrNegative(5);
  positiveOrNegative(-3);
  positiveOrNegative(0);