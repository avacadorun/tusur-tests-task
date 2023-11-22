import * as readline from "readline";

import { askQuestion, sumOfEvenNumbers } from "utils";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function evenNumberSum() {
  console.log(
    "Программа для вычисления суммы всех чётных чисел в диапазоне [a; b].",
  );

  const a = parseInt(await askQuestion("Введите значение a (a > 0): ", rl), 10);
  const b = parseInt(
    await askQuestion("Введите значение b (b > 0 и b <= a): ", rl),
    10,
  );

  if (a <= 0 || b <= 0) {
    console.log("a и b должны быть больше 0.");
    rl.close();
    return;
  }

  if (a < b) {
    console.log("a должно быть больше или равно b.");
    rl.close();
    return;
  }

  const sum = sumOfEvenNumbers(a, b);
  console.log(`Сумма всех четных чисел в диапазоне [${b}, ${a}] равна: ${sum}`);
  rl.close();
}
