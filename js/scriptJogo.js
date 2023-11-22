var nomeJogador = prompt("Digite seu nome:");
var opcaoJogador = prompt("Escolha:\n1 para PEDRA\n2 para PAPEL\n3 para TESOURA");

var opcaoComputador = (parseInt(getRandomArbitrary(1,3)))

if (opcaoJogador === 1) {
    console.log(`${nomeJogador} escolheu Pedra`)
}
else if (opcaoJogador === 2) {
    console.log(`${nomeJogador} escolheu Papel`)
} else {
    console.log(`${nomeJogador} escolheu Tesoura`)
}

if (opcaoComputador === 1) {
    console.log("Computador escolheu Pedra")
}
else if (opcaoComputador === 2) {
    console.log("Computador escolheu Papel")
} else {
    console.log("Computador escolheu Tesoura")
}


if (opcaoJogador === opcaoComputador) {
    console.log("Empate")
}
if (opcaoJogador === 1 && opcaoComputador === 3 || opcaoJogador === 2 && opcaoComputador ===1 || opcaoJogador === 3 && opcaoComputador ===1) {
    console.log(`${nomeJogador} ganhou`)
} else {
    console.log(`${nomeJogador} perdeu`)
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }