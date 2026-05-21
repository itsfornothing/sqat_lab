export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  squareRoot(value: number): number {
    if (value < 0) {
      throw new Error('Cannot calculate square root of negative number');
    }
    return Math.sqrt(value);
  }

  percentage(value: number, percent: number): number {
    return (value * percent) / 100;
  }

  modulo(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Modulo by zero is not allowed');
    }
    return a % b;
  }

  calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error('Cannot calculate average of empty array');
    }
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  }

  findMax(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error('Cannot find max of empty array');
    }
    return Math.max(...numbers);
  }

  findMin(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error('Cannot find min of empty array');
    }
    return Math.min(...numbers);
  }
}