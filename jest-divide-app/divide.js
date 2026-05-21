function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  if (a < 0 || b < 0) {
    return Math.abs(a / b);
  }
  return a / b;
}

module.exports = divide;
