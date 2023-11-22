import { test, expect } from "bun:test";
import { sumOfEvenNumbers, isValidA, isValidB } from "utils";

// Тесты для sumOfEvenNumbers
test("Тест-Кейс 1: x = 10, y = 20", () => {
  expect(sumOfEvenNumbers(10, 20)).toBe(90);
});

test("Тест-Кейс 2: x = 1, y = 100", () => {
  expect(sumOfEvenNumbers(1, 100)).toBe(2550);
});

// Тесты для isValidA и isValidB
test("Тест-Кейс 3: x = -5, y = 50", () => {
  expect(isValidA(-5)).toBe(false);
  expect(isValidB(-5, 50)).toBe(false);
});

test("Тест-Кейс 4: x = 50, y = 150", () => {
  expect(isValidA(50)).toBe(true);
  expect(isValidB(50, 150)).toBe(false);
});

test("Тест-Кейс 5: x = 0, y = 101", () => {
  expect(isValidA(0)).toBe(false);
  expect(isValidB(0, 101)).toBe(false);
});

test("Тест-Кейс 6: x = 90, y = 70", () => {
  expect(isValidA(90)).toBe(true);
  expect(isValidB(90, 70)).toBe(false);
});
