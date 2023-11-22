import * as readline from "readline";
import { describe, expect, test } from "bun:test";

export const MIN_VALUE = 1;
export const MAX_VALUE = 100;

export function sumOfEvenNumbers(a: number, b: number): number {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Функция для проверки значения a
export function isValidA(a: number): boolean {
  return a >= MIN_VALUE && a <= MAX_VALUE;
}

// Функция для проверки значения b
export function isValidB(a: number, b: number): boolean {
  return isValidA(a) && b >= MIN_VALUE && b <= MAX_VALUE && b > a;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function askQuestion(
  question: string,
  rl: readline.Interface,
): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

export async function evenNumberSum() {
  while (true) {
    console.log(
      `\nПрограмма для вычисления суммы всех чётных чисел в диапазоне [${MIN_VALUE}; ${MAX_VALUE}].\n`,
    );

    let a: number;
    while (true) {
      a = parseInt(
        await askQuestion(
          `Введите значение a (${MIN_VALUE} ≤ a ≤ ${MAX_VALUE}): `,
          rl,
        ),
        10,
      );
      if (isValidA(a)) break;
      console.log(
        `\na должно быть в диапазоне от ${MIN_VALUE} до ${MAX_VALUE}.\n`,
      );
    }

    let b: number;
    while (true) {
      b = parseInt(
        await askQuestion(
          `Введите значение b (${MIN_VALUE} ≤ b ≤ 100 и b > a): `,
          rl,
        ),
        10,
      );
      if (isValidB(a, b)) break;
      console.log(
        `\nb должно быть в диапазоне от ${MIN_VALUE} до ${MAX_VALUE} и больше a.\n`,
      );
    }

    const sum = sumOfEvenNumbers(a, b);
    console.log(
      `\nСумма всех четных чисел в диапазоне [${a}, ${b}] равна: ${sum}\n`,
    );

    const repeat = await askQuestion("Продолжить? (y/n): ", rl);
    if (repeat.trim().toLowerCase() === "n") {
      break;
    }
  }

  rl.close();
}

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
