// In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

// Numbers can use operators such as + - * / %
// Task

// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

//My solution
let v1 = 50, v2 = 100, v3 = 150, v4 = 200, v5 = 2, v6 = 250

const equal1 = (a = v1, b = v1) => a + b
const equal2 = (a = v6, b = v3) => a - b
const equal3 = (a = v1, b = v5) => a * b
const equal4 = (a = v4, b = v5) => a / b
const equal5 = (a = v6, b = v3) => a % b