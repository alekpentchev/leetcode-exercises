// create unit tests for the roman to integer exercise
// write it using jest
// https://jestjs.io/docs/en/getting-started

import { romanToInt } from "./index";

// 1. create a test suite for the roman to integer exercise
describe("roman to integer", () => {
  // 2. create a test case for the roman to integer exercise
  test("should convert roman numbers to integers", () => {
    // 3. write the test case
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("LVIII")).toBe(58);
    expect(romanToInt("MCMXCIV")).toBe(1994);
    expect(romanToInt("MMXVIII")).toBe(2018);
    expect(romanToInt("MCMXCVI")).toBe(1996);
  });
});
