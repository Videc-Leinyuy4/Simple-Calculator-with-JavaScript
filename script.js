// program to create a simple calculator in JavaScript.  

const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
// accept the number from the user 
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; 
  

if (operator == '+') {   
    result = number1 + number2;  
}  
else if (operator == '-') { 
    result = number1 - number2;  
}  
else if (operator == '*') { 
    result = number1 * number2;  
}  
else {  
    result = number1 / number2; 
}  
  
// display the result of the Calculator  
window.alert(" Result is" +  result);  

