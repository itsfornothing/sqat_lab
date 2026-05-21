import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(calculator.add(5, 3)).toBe(8);
      expect(calculator.add(10, 20)).toBe(30);
    });

    it('should add negative numbers correctly', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
      expect(calculator.add(-10, 5)).toBe(-5);
    });

    it('should add zero correctly', () => {
      expect(calculator.add(0, 5)).toBe(5);
      expect(calculator.add(5, 0)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(calculator.add(1.5, 2.5)).toBe(4);
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    it('should subtract positive numbers correctly', () => {
      expect(calculator.subtract(10, 3)).toBe(7);
      expect(calculator.subtract(20, 5)).toBe(15);
    });

    it('should subtract negative numbers correctly', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
      expect(calculator.subtract(-10, 5)).toBe(-15);
    });

    it('should subtract zero correctly', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
      expect(calculator.subtract(0, 5)).toBe(-5);
    });

    it('should handle decimal numbers', () => {
      expect(calculator.subtract(5.5, 2.2)).toBeCloseTo(3.3);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(5, 3)).toBe(15);
      expect(calculator.multiply(10, 10)).toBe(100);
    });

    it('should multiply with negative numbers correctly', () => {
      expect(calculator.multiply(-5, 3)).toBe(-15);
      expect(calculator.multiply(-5, -3)).toBe(15);
    });

    it('should multiply by zero correctly', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
      expect(calculator.multiply(0, 5)).toBe(0);
    });

    it('should handle decimal numbers', () => {
      expect(calculator.multiply(1.5, 2)).toBe(3);
      expect(calculator.multiply(0.1, 0.1)).toBeCloseTo(0.01);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(15, 3)).toBe(5);
    });
        it('should divide with negative numbers correctly', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    it('should handle decimal results', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333333);
      expect(calculator.divide(5, 2)).toBe(2.5);
    });
  });

  describe('power', () => {
    it('should calculate power with positive exponents', () => {
      expect(calculator.power(2, 3)).toBe(8);
      expect(calculator.power(5, 2)).toBe(25);
      expect(calculator.power(10, 0)).toBe(1);
    });

    it('should calculate power with negative exponents', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
      expect(calculator.power(10, -1)).toBe(0.1);
    });

    it('should handle zero base', () => {
      expect(calculator.power(0, 5)).toBe(0);
      expect(calculator.power(0, 0)).toBe(1);
    });

    it('should handle decimal results', () => {
      expect(calculator.power(4, 0.5)).toBe(2);
    });
  });

  describe('squareRoot', () => {
    it('should calculate square root of positive numbers', () => {
      expect(calculator.squareRoot(9)).toBe(3);
      expect(calculator.squareRoot(16)).toBe(4);
      expect(calculator.squareRoot(2)).toBeCloseTo(1.414214);
    });

    it('should calculate square root of zero', () => {
      expect(calculator.squareRoot(0)).toBe(0);
    });

    it('should throw error for negative numbers', () => {
      expect(() => calculator.squareRoot(-1)).toThrow('Cannot calculate square root of negative number');
    });

    it('should handle perfect squares', () => {
      expect(calculator.squareRoot(25)).toBe(5);
      expect(calculator.squareRoot(100)).toBe(10);
    });
  });

  describe('percentage', () => {
    it('should calculate percentage correctly', () => {
      expect(calculator.percentage(100, 20)).toBe(20);
      expect(calculator.percentage(200, 15)).toBe(30);
      expect(calculator.percentage(50, 100)).toBe(50);
    });

    it('should handle zero percent', () => {
      expect(calculator.percentage(100, 0)).toBe(0);
    });

    it('should handle values over 100%', () => {
      expect(calculator.percentage(100, 150)).toBe(150);
    });

    it('should handle decimal percentages', () => {
      expect(calculator.percentage(100, 12.5)).toBe(12.5);
    });
  });

  describe('modulo', () => {
    it('should calculate modulo correctly', () => {
      expect(calculator.modulo(10, 3)).toBe(1);
      expect(calculator.modulo(20, 7)).toBe(6);
      expect(calculator.modulo(15, 5)).toBe(0);
    });

    it('should handle negative numbers', () => {
      expect(calculator.modulo(-10, 3)).toBe(-1);
      expect(calculator.modulo(10, -3)).toBe(1);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    it('should handle decimal numbers', () => {
      expect(calculator.modulo(10.5, 3)).toBeCloseTo(1.5);
    });
  });

  describe('calculateAverage', () => {
    it('should calculate average of positive numbers', () => {
      expect(calculator.calculateAverage([1, 2, 3, 4, 5])).toBe(3);
      expect(calculator.calculateAverage([10, 20, 30])).toBe(20);
    });

    it('should calculate average of negative numbers', () => {
      expect(calculator.calculateAverage([-1, -2, -3, -4, -5])).toBe(-3);
    });

    it('should calculate average of mixed numbers', () => {
      expect(calculator.calculateAverage([-5, 0, 5])).toBe(0);
    });

    it('should calculate average of single element', () => {
      expect(calculator.calculateAverage([42])).toBe(42);
    });

    it('should throw error for empty array', () => {
      expect(() => calculator.calculateAverage([])).toThrow('Cannot calculate average of empty array');
    });
    