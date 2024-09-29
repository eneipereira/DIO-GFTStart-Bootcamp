const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function classificadorDeHeroi(quantidadeXp) {
  const ranks = [
    { limite: 1000, rank: "Ferro" },
    { limite: 3000, rank: "Bronze" },
    { limite: 5000, rank: "Prata" },
    { limite: 6000, rank: "Ouro" },
    { limite: 7000, rank: "Platina" },
    { limite: 8000, rank: "Diamante" },
    { limite: 9000, rank: "Ascendente" },
    { limite: 10000, rank: "Imortal" }
  ]

  let rank = "Radiante";

  for (let index = 0; index < ranks.length; index += 1) {
    if (quantidadeXp <= ranks[index].limite) {
      rank = ranks[index].rank;
      break;
    }
  }

  return rank;
}

rl.question("Digite o nome do herói: ", (nomeHeroi) => {
  rl.question("Digite a quantidade de XP do herói: ", (xpHeroi) => {
    xpHeroi = parseInt(xpHeroi);
    const patenteHeroi = classificadorDeHeroi(xpHeroi);
    console.log(`O herói ${nomeHeroi} está no rank ${patenteHeroi}`);
    rl.close();
  });
});
