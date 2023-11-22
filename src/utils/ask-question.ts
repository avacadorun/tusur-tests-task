import * as readline from "readline";

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
