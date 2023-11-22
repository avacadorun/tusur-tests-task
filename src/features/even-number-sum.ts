import * as readline from "readline";

import { sumOfEvenNumbers, isValidA, isValidB } from "utils";
import { MAX_VALUE, MIN_VALUE } from "consts";

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
