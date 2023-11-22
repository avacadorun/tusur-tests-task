export function sumOfEvenNumbers(a: number, b: number): number {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
