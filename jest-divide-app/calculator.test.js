const calculator = require("./calculator");

describe("calculator functions", () => {

    test("add 15 with 7 to equal 22", () => {
      expect(calculator.add(15, 7)).toBe(22);
    });

    test("subtract 4 from 12 to equal 8", () => {
      expect(calculator.subtract(12, 4)).toBe(8);
    });

    test("multiply 11 by 10 to equal 110", () => {
      expect(calculator.multiply(11, 10)).toBe(110);
    });

    test("divides 45 by 3 to equal 10", () => {
      expect(calculator.divide(45, 3)).toBe(15);
    });
});
