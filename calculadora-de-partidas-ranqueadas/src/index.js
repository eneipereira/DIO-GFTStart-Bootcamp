const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculaSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function classificaJogador(saldo) {
  const ranks = [
    { limite: 10, rank: "Ferro" },
    { limite: 20, rank: "Bronze" },
    { limite: 50, rank: "Prata" },
    { limite: 60, rank: "Ouro" },
    { limite: 70, rank: "Platina" },
    { limite: 80, rank: "Diamante" },
    { limite: 90, rank: "Ascendente" },
    { limite: 100, rank: "Imortal" }
  ]

  let rank = "Radiante";

  for (let index = 0; index < ranks.length; index += 1) {
    if (saldo <= ranks[index].limite) {
      rank = ranks[index].rank;
      break;
    }
  }

  return rank;
}

rl.question('Quantas vitórias você tem? ', (vitorias) => {
  rl.question('Quantas derrotas você tem? ', (derrotas) => {
    const saldo = calculaSaldo(vitorias, derrotas);
    const rank = classificaJogador(saldo);

    console.log(`Você tem o saldo de ${saldo} vitórias e está no ${rank}`);
    rl.close();
  });
});
