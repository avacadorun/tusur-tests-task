import { sumOfEvenNumbers } from "./sum-of-even-numbers.ts";
import { describe, expect, test } from "bun:test";

describe("Тестирование функции sumOfEvenNumbers", () => {
  test("Сумма четных чисел в диапазоне от 1 до 10", () => {
    expect(sumOfEvenNumbers(1, 10)).toBe(2 + 4 + 6 + 8 + 10);
  });

  test("Сумма четных чисел в диапазоне от 5 до 15", () => {
    expect(sumOfEvenNumbers(5, 15)).toBe(6 + 8 + 10 + 12 + 14);
  });

  test("Сумма четных чисел в диапазоне, где a равно b и оба четные", () => {
    expect(sumOfEvenNumbers(4, 4)).toBe(4);
  });

  test("Сумма четных чисел в диапазоне, где a равно b и оба нечетные", () => {
    expect(sumOfEvenNumbers(5, 5)).toBe(0);
  });

  test("Сумма четных чисел в диапазоне с отрицательными числами", () => {
    expect(sumOfEvenNumbers(-5, 5)).toBe(-4 + -2 + 0 + 2 + 4);
  });
});
