import { MAX_VALUE, MIN_VALUE } from "../consts";

// Функция для проверки значения a
export function isValidA(a: number): boolean {
  return a >= MIN_VALUE && a <= MAX_VALUE;
}

// Функция для проверки значения b
export function isValidB(a: number, b: number): boolean {
  return isValidA(a) && b >= MIN_VALUE && b <= MAX_VALUE && b > a;
}
