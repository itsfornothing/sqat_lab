const Divide = require("./divide");


function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return Divide(a, b) }

module.exports = { add, subtract, multiply, divide };