import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function countLetterA(text: string): number {
  return text.toLowerCase().split("a").length - 1;
}

function isA(text: string): boolean {
  return countLetterA(text) > 0;
}

rl.question("Digite um texto: ", (answer) => {
  const count = countLetterA(answer);

  if (isA(answer)) {
    console.log(`O texto contém a letra 'a' ${count} vezes.`);
  } else {
    console.log("O texto não contém a letra 'a'.");
  }

  rl.close();
});
