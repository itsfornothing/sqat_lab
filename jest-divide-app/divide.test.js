const divide = require("./divide");

describe("divide function", () => {
  describe("positive numbers", () => {
    test("divides 10 by 2 to equal 5", () => {
      expect(divide(10, 2)).toBe(5);
    });

    test("divides 20 by 4 to equal 5", () => {
      expect(divide(20, 4)).toBe(5);
    });

    test("divides 100 by 10 to equal 10", () => {
      expect(divide(100, 10)).toBe(10);
    });
  });

  describe("negative numbers (returns absolute value)", () => {
    test("divides negative dividend by positive divisor", () => {
      // Arrange
      const dividend = -10;
      const divisor = 2;

      // Act
      const result = divide(dividend, divisor);

      // Assert
      expect(result).toBe(5); // |-10 / 2| = 5
    });

    test("divides positive dividend by negative divisor", () => {
      expect(divide(10, -2)).toBe(5); // |10 / -2| = 5
    });

    test("divides two negative numbers", () => {
      expect(divide(-10, -2)).toBe(5); // |-10 / -2| = 5
    });

    test("divides negative by negative with different result", () => {
      expect(divide(-20, -4)).toBe(5); // |-20 / -4| = 5
    });
  });

  describe("error handling", () => {
    test("throws error when dividing by zero", () => {
      expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });

    test("throws error when dividing zero by zero", () => {
      expect(() => divide(0, 0)).toThrow("Cannot divide by zero");
    });

    test("throws error when dividing negative by zero", () => {
      expect(() => divide(-10, 0)).toThrow("Cannot divide by zero");
    });
  });

  describe("non-numeric inputs", () => {
    test("throws error for non-numeric input", () => {
      expect(() => divide("10", 2)).toThrow("Both inputs must be numbers");
    });

    test("throws error when dividing null by number", () => {
      expect(() => divide(null, 2)).toThrow("Both inputs must be numbers");
    });

    test("throws error when dividing non-numeric input by null", () => {
      expect(() => divide("10", null)).toThrow("Both inputs must be numbers");
    });
  });

  describe("edge cases", () => {
    test("divides very small numbers correctly and precisely", () => {
      expect(divide(0.0001, 0.0002)).toBe(0.5);
    });

    test("divides very large numbers correctly and precisely", () => {
      expect(divide(1e10, 1e5)).toBe(100000);
    });

    test("handles floating-point precision issues", () => {
      expect(divide(0.1, 0.2)).toBeCloseTo(0.5);
    });
  });
});
