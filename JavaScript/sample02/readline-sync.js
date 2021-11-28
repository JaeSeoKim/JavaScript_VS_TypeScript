import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const readlineQuestionSync = (query) =>
  new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
