"use strict";

const prompt = require(`prompt-sync`)();

/////// Atividades Aula 2 //////
/*
// 4) Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos. Como primeiro passo, escreva um programa que produza a seguinte saída:
// ALUNO (A)
// NOTA
// ALINE
//  9.0
// MÁRI0
//  DEZ
// SÉRGIO
//   4.5
// SHIRLEY
//   7.0
const boletim = [
  ["ALUNO (A)", `NOTA`],
  ["ALINE", 9.0],
  [`MÁRI0`, `DEZ`],
  ["SÉRGIO", 4.5],
  ["SHIRLEY", 7.0],
];
console.log(boletim);

// 5) Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.
const opçoes = [`0:Negro`, `1:Branco`, `2:Indio`, `3:Pardo`];
const descendencia = prompt(`Qual a sua descendência? \n ${opçoes}`);
console.log(`Sua descendência é ${opçoes[descendencia].substring(2)}`);

// 6) Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).
const vida = Math.floor(Math.random() * (51 - 10)) + 10;
const ataque = Math.floor(Math.random() * (11 - 5)) + 5;
const turnos = vida / ataque;
console.log(vida, ataque, turnos);
if (turnos % 1 == 0) {
  console.log(`O jogador irá derrotar o monstro em ${turnos} turnos`);
} else {
  console.log(
    `O jogador irá derrotar o monstro em ${Math.ceil(turnos)} turnos`
  );
}
*/

////// Atividades aula 3 //////
/*
// Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.
const n1 = prompt(`Informe o número 1`);
const n2 = prompt(`Informe o número 2`);
if (n1 > n2) {
  console.log(n1);
} else if (n1 < n2) {
  console.log(n2);
} else {
  console.log(`Ambos são iguais com o valor de ${n1}`);
}

// Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.
const nota1 = prompt(`Informe a nota 1`);
const nota2 = prompt(`Informe a nota 2`);
const nota3 = prompt(`Informe a nota 3`);
const nota4 = prompt(`Informe a nota 4`);
const media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media >= 7) {
  console.log(`Aprovado`);
} else if (media >= 5) {
  console.log(`Em recuperação`);
} else {
  console.log(`Reprovado`);
}

// Faça um programa que leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.
const A = Math.round(prompt(`Informe o valor A`));
const B = Math.round(prompt(`Informe o valor B`));
if (A % B == 0 || B % A == 0) {
  console.log(`Sao Multiplos`);
} else {
  console.log(`Nao sao Multiplos`);
}
*/

////// Atividades aula 4 //////
// Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
// Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
// Se A² = B² + C² , apresente a mensagem: TRIANGULO RETANGULO;
// Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
// Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
// Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
// Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;
/*
const A = Math.round(prompt(`Informe o valor A`));
const B = Math.round(prompt(`Informe o valor B`));
const C = Math.round(prompt(`Informe o valor C`));
const lados = [A, B, C];
lados.sort(function (a, b) {
  return b - a;
});
if (lados[0] >= lados[1] + lados[2]) {
  console.log("NAO FORMA TRIANGULO");
}
if (Math.pow(lados[0], 2) == Math.pow(lados[1], 2) + Math.pow(lados[2], 2)) {
  console.log("TRIANGULO RETANGULO");
}
if (Math.pow(lados[0], 2) > Math.pow(lados[1], 2) + Math.pow(lados[2], 2)) {
  console.log("TRIANGULO OBTUSANGULO");
}
if (Math.pow(lados[0], 2) < Math.pow(lados[1], 2) + Math.pow(lados[2], 2)) {
  console.log("TRIANGULO ACUTANGULO");
}
if (lados[0] == lados[1] && lados[0] == lados[2]) {
  console.log("TRIANGULO EQUILATERO");
}
if (
  (lados[0] == lados[1] && lados[0] != lados[2]) ||
  (lados[0] != lados[1] && lados[0] == lados[2]) ||
  (lados[1] == lados[2] && lados[1] != lados[0])
) {
  console.log("TRIANGULO ISOSCELES");
}

// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
const nome = prompt("Digite seu nome.");
let senha = prompt("Digite sua senha");

while (nome == senha) {
  console.log("ERRO! SENHA NÃO PODE SER IGUAL AO NOME.");
  senha = prompt("Digite sua senha");
}

// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';
let Nome = prompt("Digite seu nome.");
let Idade = prompt("Digite sua idade.");
let Salário = prompt("Digite seu salário.");
let Estado = prompt("Digite seu estado civil.(s, c, v, d)");

while (Nome.length <= 3) {
  console.log("ERRO! NOME NÃO PODE SER MENOS QUE 3 DÍGITOS.");
  Nome = prompt("Digite seu nome.");
}

while (Idade < 0 || Idade >= 150) {
  console.log("ERRO! Idade NÃO PODE SER NEGATIVA OU ACIMA DE 150.");
  Idade = prompt("Digite sua idade.");
}

while (Salário <= 0) {
  console.log("ERRO! Salário NÃO PODE SER MENOR OU IGUAL A 0.");
  Salário = prompt("Digite seu salário.");
}

while (Estado != `s` && Estado != `c` && Estado != `v` && Estado != `d`) {
  console.log("ERRO! Estado Civil NÃO RECONHECIDO.");
  Estado = prompt("Digite seu estado civil.(s, c, v, d)");
}

// Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.
let numero = Math.floor(prompt("Digite seu número par"));

while (numero % 2 != 0) {
  console.log("ERRO! NÚMERO NÃO PODE SER PAR.");
  numero = prompt("Digite seu número par");
}

// Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deve ser repetir até o usuário acertar o número, e a cada palpite deve dizer se o número é maior ou menor que o palpite. No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.
const pensar = Math.floor(Math.random() * (11 - 1)) + 1;
let i = 1;
let palpite = prompt("Digite seu palpite");
while (palpite != pensar) {
  console.log("ERRO! Palpite não condiz com o número.");
  palpite = prompt("Digite seu palpite");
  i++;
}
console.log(`Parabéns. Você acertou com ${i} palpites.`);
*/

///////// Atividades aula 6 ////////
/*
// Faça um Programa que leia 20 números inteiros e armazene-os num array. Armazene os números pares no array PAR e os números IMPARES no array IMPAR. Imprima os três vetores.
let numeros = [];
for (let i = 0; i < 20; i++) {
  numeros[i] = Math.floor(Math.random() * (100 - 1)) + 1;
}

const PAR = numeros.filter((value) => {
  if (value % 2 == 0) {
    return value;
  }
});
const IMPAR = numeros.filter((value) => {
  if (value % 2 != 0) {
    return value;
  }
});
console.log(numeros);
console.log(PAR);
console.log(IMPAR);

// Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo array. Imprima a média de idade e de altura.
let pessoas = [];
for (let i = 0; i < 5; i++) {
  const idade = prompt(`Qual a idade da pessoa ${i + 1}?`);
  const altura = prompt(`Qual a altura da pessoa ${i + 1}?`);
  pessoas.push([idade, altura]);
}
let sum1 = 0;
let sum2 = 0;
pessoas.forEach(myFunction);

function myFunction(item) {
  sum1 += item[0] * 1;
  sum2 += item[1] * 1;
  console.log(sum1);
  console.log(sum2);
}
console.log(`Média de idades é ${sum1 / 5}`);
console.log(`Média de alturas é ${sum2 / 5}`);

// Faça um programa em que o usuário escolha a quantidade de alunos a serem cadastrados e peça o nome e nota de cada um. Armazene as informações em duas listas separadas e no final imprima o nome e a nota correspondente de cada aluno, e a média total da notas.

let nomes = [];
let notas = [];
let total = 0;
const quantidade = prompt(`Quantos alunos serão cadastrados?`);
for (let i = 0; i < quantidade; i++) {
  nomes.push(prompt(`Qual o nome do aluno ${i + 1}?`));
  notas.push(prompt(`Qual a nota do aluno ${i + 1}?`));
  total += notas[i] * 1;
}
console.log(nomes, notas, total, Math.round(total / quantidade));

// Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido
let lançamentos = [];
for (let i = 0; i < 100; i++) {
  lançamentos.push(Math.floor(Math.random() * (7 - 1)) + 1);
}
const countOccurrences = (arr, val) =>
  arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(`Ocorrências do número 1 é de:${countOccurrences(lançamentos, 1)}`);
console.log(`Ocorrências do número 2 é de:${countOccurrences(lançamentos, 2)}`);
console.log(`Ocorrências do número 3 é de:${countOccurrences(lançamentos, 3)}`);
console.log(`Ocorrências do número 4 é de:${countOccurrences(lançamentos, 4)}`);
console.log(`Ocorrências do número 5 é de:${countOccurrences(lançamentos, 5)}`);
console.log(`Ocorrências do número 6 é de:${countOccurrences(lançamentos, 6)}`);
*/

///////// Atividades aula 7 ////////
/*
// Faça um programa que peça um número inteiro e crie arrays com:
// Todos os números pares de 0 ao número escolhido
// Todos os números ímpares do 0 ao número escolhido
const numero = prompt(`Diga o número.`);
let pares = [];
let impar = [];
for (let i = 1; i < numero; i++) {
  if (i % 2 == 0) {
    pares.push(i);
  } else {
    impar.push(i);
  }
}
console.log(`Numeros pares: ${pares}`);
console.log(`Numeros ímpares: ${impar}`);

// Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois peça e armazene essa quantidade de notas em um array. Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).
let notas = [];
let aprovados = 0;
let recuperacao = 0;
let repovados = 0;
const quantidade = prompt(`Quantos alunos serão cadastrados?`);
for (let i = 0; i < quantidade; i++) {
  notas.push(prompt(`Qual a nota do aluno ${i + 1}?`));
  if (notas[i] >= 7) {
    aprovados++;
  } else if (notas[i] < 5) {
    repovados++;
  } else {
    recuperacao++;
  }
}
console.log(
  `Aprovados: ${aprovados} \n Recuperação: ${recuperacao} \n Reprovados: ${repovados}`
);

// Faça um programa que sorteie 20 números de 0 a 100, armazene todos em um array e imprima em ordem crescente.
let numeros = [];
for (let i = 0; i < 20; i++) {
  numeros[i] = Math.floor(Math.random() * (100 - 1)) + 1;
}
console.log(numeros.sort((a, b) => a - b));

// Faça um programa que peça o nome de usuário e a senha de um usuário. A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.
const nome = prompt(`Qual o nome do usuário?`);
let senha = prompt(`Qual a senha do usuário?`);
const numbers = /\d+/g;
const especial = /[`~!@#$%^&*()_|+\-=?;:'"<>\{\}\[\]\\\/]/gi;

while (!senha.match(numbers) || senha.length < 8 || !senha.match(especial)) {
  if (!senha.match(numbers) || senha.length < 8 || !senha.match(especial)) {
    senha = prompt(`Senha não condiz com requisitos, favor criar senha.`);
  }
}
*/

///////// Atividades aula 8 ////////
/*
// Peça ao usuário uma quantidade de linhas e e outra de colunas, e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]
const linhas = prompt(`Qual a quantidade de linhas?`);
const colunas = prompt(`Qual a quantidade de colunas?`);
let matriz = new Array(linhas);
for (let i = 0; i < linhas; i++) {
  matriz[i] = new Array(colunas);
  for (let j = 0; j < colunas; j++) {
    matriz[i][j] = i + j;
  }
  console.log(matriz[i]);
}

// Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
const numero = prompt(`Qual o número?`);
let fatorial = 1;
for (let i = 1; i <= numero; i++) {
  fatorial = fatorial * i;
}
console.log(fatorial);

// Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.
const tabuada = prompt(`Qual o número?`);
for (let i = 1; i <= 10; i++) {
  if (tabuada % i == 0) {
    console.log(i);
  }
}

// Faça um programa que carregue uma lista com os modelos de cinco carros. Carregue uma outra lista com o consumo desses carros, isto é, quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará, considerando um que a gasolina custe R$ 5,50 o litro.
const modelos = [`mercedes`, `fiat`, `camaro`, `bmw`, `honda`];
const consumo = [10, 5, 20, 8, 2];
let posicao = consumo[0] * 1;
const litros = consumo.map(myFunction);
const custos = consumo.map(Custo);

for (let i = 1; i < 5; i++) {
  if (consumo[i - 1] * 1 > consumo[i] * 1) {
    posicao = i;
  }
}

function myFunction(num) {
  return num * 1000;
}

function Custo(num) {
  return `R$ ` + num * 5.5;
}

console.log(`O carro mais econômico é ${modelos[posicao]}.`);
console.log(
  `Os litros são de ${litros} respectivamente e custarão ${custos} respectivamente.`
);
*/
///////// Atividades aula 9 ////////
// Faça um programa que peça 2 números e crie um array contando todos os números os números sequenciais do primeiro até o segundo, independente de ser maior ou menor.
/*
const numero1 = prompt(`Qual o número 1?`);
const numero2 = prompt(`Qual o número 2?`);
const numeros = [];
if (numero1 < numero2) {
  for (let i = numero1 * 1 + 1; i < numero2; i++) {
    numeros.push(i);
  }
} else if (numero1 > numero2) {
  for (let i = numero2 * 1 + 1; i < numero1; i++) {
    numeros.push(i);
  }
} else {
  console.log("Numeros são iguais.");
}
console.log(numeros);

// Leia um valor inteiro X. Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso. Use o laço FOR.
const x = prompt(`Qual o número x?`);
const impares = [];
for (let i = 1; i < x; i++) {
  if (i % 2 != 0) {
    impares.push(i);
  }
}

console.log(impares);

// Faça um programa que, dado uma lista de N números (o usuário deve determinar a quantidade de números a serem entrados e entrar cada um deles), determine o menor valor, o maior valor e a soma dos valores.
const quantidade = prompt(`Qual a quantidade de números?`);
const valores = [];

for (let i = 0; i < quantidade; i++) {
  valores.push(prompt(`Qual o número ${i}?`) * 1);
}
valores.sort(function (a, b) {
  return a - b;
});
let sum = valores.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
console.log(
  `O menor valor é ${valores[0]} e o maior valor é ${
    valores[quantidade - 1]
  }. A soma dos valores é ${sum}`
);

// Numa eleição existem três candidatos. Faça um programa que peça o número total de eleitores. Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
const eleitores = prompt(`Qual a quantidade de eleitores?`);
const opções = [`0: Amaro`, `1: Leticia`, `2: Fabiane`];
const votos = [];

for (let i = 0; i < eleitores; i++) {
  votos.push(prompt(`Em quem vai votar?${opções}`));
}
const Amaro = votos.filter((x) => x == 0).length;
const Leticia = votos.filter((x) => x == 1).length;
const Fabiane = votos.filter((x) => x == 2).length;
console.log(
  `Amaro teve ${Amaro} votos.\nLeticia teve ${Leticia} votos.\nFabiane teve ${Fabiane} votos.`
);
*/
///////// Atividades aula 10 ////////
// Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.
/*
const number = parseInt(prompt("Entre um número positivo: "));
let isPrime = true;

if (number === 1) {
  console.log("1 não é primo ou composto.");
} else if (number > 1) {
  // looping through 2 to number-1
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} é um número primo`);
  } else {
    console.log(`${number} não é um número primo`);
  }
} else {
  console.log("Não é um número primo.");
}

// Peça ao usuário para digitar vários nomes (a quantidade deve ser escolhida por ele). Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro), apresente também o maior e o menor nome (caso haja empate, deve mostrar todos).
const quantidade = prompt(`Qual a quantidade de nomes?`);
const nomes = [];
let maior = 0;
let menor = 0;
const maiores = [];
const menores = [];
for (let i = 0; i < quantidade; i++) {
  nomes.push(prompt(`Qual o nome${i + 1}?`));
}
nomes.reverse();
menor = nomes[0].length;
for (let i = 0; i < nomes.length; i++) {
  if (maior < nomes[i].length) {
    maior = nomes[i].length;
  }
  if (menor > nomes[i].length) {
    menor = nomes[i].length;
  }
}
for (let i = 0; i < nomes.length; i++) {
  if (maior == nomes[i].length) {
    maiores.push(nomes[i]);
  }
  if (menor == nomes[i].length) {
    menores.push(nomes[i]);
  }
}
console.log(nomes);
console.log(maiores);
console.log(menores);

// Faça um programa que peça ao usuário digitar a população e a taxa de crescimento populacional de 2 países A e B, sendo que a população do país A deve ser menor que a de B, e a taxa de crescimento de A seja maior. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.
let popA = parseInt(prompt(`Qual a população de A?`));
let popB = parseInt(prompt(`Qual a população de B?`));
const txA = 1.5;
const txB = 1.3;
let anos = 0;

while (popA < popB) {
  popA = popA * txA;
  popB = popB * txB;
  anos++;
}
console.log(
  `A quantidade de anos até as populações se igualares ou A ultrapassar B é de ${anos}`
);

// Faça um "jogo da velha" criando uma matriz em duas dimensões (Você deve criar um array com 3 arrays de 3 elementos cada dentro). O programa deve pedir as coordenadas (linha e coluna) alternadamente para 2 jogares e marcar X ou O em cada caso. Caso um jogador vença, ele deve interromper o programa e anunciar o vencedor.
const readline = require("readline");
class TicTacToe {
  constructor() {
    // initiate variables
    this.ticTacToe = [];
    this.ticTacToe[8] = undefined;
    this.ticTacToeLayout = "";
    this.currentPlayer = false; // player 1 = false (O), player 2 = true (X)
    this.gameEnded = false;
    this.moveRegister = [];

    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  /// update layout
  updateLayout() {
    this.ticTacToeLayout = `${this.displayItem(
      this.ticTacToe[0]
    )} | ${this.displayItem(this.ticTacToe[1])} | ${this.displayItem(
      this.ticTacToe[2]
    )}
---------
${this.displayItem(this.ticTacToe[3])} | ${this.displayItem(
      this.ticTacToe[4]
    )} | ${this.displayItem(this.ticTacToe[5])}
---------
${this.displayItem(this.ticTacToe[6])} | ${this.displayItem(
      this.ticTacToe[7]
    )} | ${this.displayItem(this.ticTacToe[8])}`;
  }

  // start game
  startGame() {
    this.displayLayout();

    // listen to inputs
    this.rl.on("line", (input) => {
      if (this.ticTacToe.length <= 9) {
        // read move
        this.readMove(parseInt(input));
        // continue playing
      } else {
        console.log("Game Ended!");
        this.processGame();
      }
    });

    // listen to delete events by backspace key
    process.stdin.on("keypress", (str, key) => {
      // delete move
      if (key.sequence === "\b") {
        this.deleteLastMove();
      }
    });
  }

  endGame() {
    this.rl.close();
    this.gameEnded = true;
    console.log("Moves history --- ");
    console.log(this.moveRegister);
    process.exit();
    return false;
  }

  continuePlay() {
    // console.log("Continuing: this.ticTacToe === ", this.ticTacToe)
    this.displayLayout();
    this.processGame();
    if (!this.gameEnded) {
      // switch player
      this.currentPlayer = arguments[0]
        ? this.currentPlayer
        : !this.currentPlayer;
      console.log(
        `Player ${this.displayPlayer(
          this.currentPlayer
        )}, Your move! (position[1-9]): `
      );
    }
  }

  processGame() {
    // at least 5 moves need to have been made
    if (this.moveRegister.length >= 5) {
      var checkSet = new Set();
      // possible vertical alignments
      if (
        this.ticTacToe[0] &&
        this.ticTacToe[3] &&
        this.ticTacToe[6] &&
        Array.from(
          checkSet
            .add(this.ticTacToe[0])
            .add(this.ticTacToe[3])
            .add(this.ticTacToe[6])
        ).length === 1
      ) {
        console.log(
          `Player ${this.getPlayerFromChar(this.ticTacToe[0])} Wins!!`
        );
        this.endGame();
      }
      checkSet.clear();
      if (
        this.ticTacToe[1] &&
        this.ticTacToe[4] &&
        this.ticTacToe[7] &&
        Array.from(
          checkSet
            .add(this.ticTacToe[1])
            .add(this.ticTacToe[4])
            .add(this.ticTacToe[7])
        ).length === 1
      ) {
        console.log(
          `Player ${this.getPlayerFromChar(this.ticTacToe[1])} Wins!!`
        );
        this.endGame();
      }
      checkSet.clear();
      if (
        this.ticTacToe[2] &&
        this.ticTacToe[5] &&
        this.ticTacToe[8] &&
        Array.from(
          checkSet
            .add(this.ticTacToe[2])
            .add(this.ticTacToe[5])
            .add(this.ticTacToe[8])
        ).length === 1
      ) {
        console.log(
          `Player ${this.getPlayerFromChar(this.ticTacToe[2])} Wins!!`
        );
        this.endGame();
      }
      checkSet.clear();
      // possible horizontal alignments
      if (
        this.ticTacToe[0] &&
        this.ticTacToe[1] &&
        this.ticTacToe[2] &&
        Array.from(
          checkSet
            .add(this.ticTacToe[0])
            .add(this.ticTacToe[1])
            .add(this.ticTacToe[2])
        ).length === 1
      ) {
        console.log(
          `Player ${this.getPlayerFromChar(this.ticTacToe[0])} Wins!!`
        );
        this.endGame();
      }
      checkSet.clear();
      if (
        this.ticTacToe[3] &&
        this.ticTacToe[4] &&
        this.ticTacToe[5] &&
        Array.from(
          checkSet
            .add(this.ticTacToe[3])
            .add(this.ticTacToe[4])
            .add(this.ticTacToe[5])
        ).length === 1
      ) {
        console.log(
          `Player ${this.getPlayerFromChar(this.ticTacToe[3])} Wins!!`
        );
        this.endGame();
      }
      checkSet.clear();
      if (
        this.ticTacToe[6] &&
        this.ticTacToe[7] &&
        this.ticTacToe[8] &&
        Array.from(
          checkSet
            .add(this.ticTacToe[6])
            .add(this.ticTacToe[7])
            .add(this.ticTacToe[8])
        ).length === 1
      ) {
        console.log(
          `Player ${this.getPlayerFromChar(this.ticTacToe[6])} Wins!!`
        );
        this.endGame();
      }
      checkSet.clear();
      // possible diagonal alignments
      if (
        (this.ticTacToe[0] &&
          this.ticTacToe[4] &&
          this.ticTacToe[8] &&
          Array.from(
            checkSet
              .add(this.ticTacToe[0])
              .add(this.ticTacToe[4])
              .add(this.ticTacToe[8])
          ).length === 1) ||
        (this.ticTacToe[2] &&
          this.ticTacToe[4] &&
          this.ticTacToe[6] &&
          Array.from(
            checkSet
              .add(this.ticTacToe[2])
              .add(this.ticTacToe[4])
              .add(this.ticTacToe[6])
          ).length === 1)
      ) {
        console.log(
          `Player ${this.getPlayerFromChar(this.ticTacToe[4])} Wins!!`
        );
        this.endGame();
      }
      checkSet.clear();
    }
  }

  // helpers
  displayItem(item) {
    return item === undefined ? " " : item;
  }

  displayPlayer(plyr) {
    return plyr ? 1 : 2;
  }

  getPlayerFromChar(char) {
    return this.displayPlayer(char === "X");
  }

  getCharacter(plyr) {
    return plyr ? "X" : "O";
  }

  displayLayout() {
    this.updateLayout();
    console.log(this.ticTacToeLayout);
  }

  readMove(position) {
    var self = this;
    // check if poosition is eligible
    if (position > 9 || position < 1) {
      // wrong position
      self.moveError("Wrong position!!! ");
    }
    // check if position is occupied
    if (self.ticTacToe[position - 1] !== undefined) {
      console.log(self.ticTacToe[position - 1]);
      // position occupied
      self.moveError("Position Occupied!!! ");
    } else {
      // register move
      self.ticTacToe[position - 1] = self.getCharacter(self.currentPlayer);
      // record move
      self.recordMove(position - 1, self.currentPlayer);
      // continue playing
      self.continuePlay();
    }
  }

  // notify wrong moves
  moveError(message) {
    console.log(
      `${arguments[0] ? arguments[0] : ""}Player ${this.displayPlayer(
        this.currentPlayer
      )}, Your move! (position[1-9]): `
    );
  }

  recordMove(position, player) {
    this.moveRegister.push({
      position: position,
      char: this.getCharacter(this.currentPlayer),
      player: this.displayPlayer(this.currentPlayer),
    });
  }

  deleteLastMove() {
    // delete character
    if (this.moveRegister.length > 1) {
      var pos = this.moveRegister[this.moveRegister.length - 1].position;
      this.ticTacToe[pos] = " ";
      // unregister move
      this.moveRegister.pop();
      // continue play
      this.continuePlay();
    } else {
      console.log("Can't delete any more moves!!");
      // continue play
      this.continuePlay(true); // don't change player with the next move
    }
  }

  processInput(moveContents) {
    var mc = new Set(moveContents);
    this.recordMove(mc[0], mc[1], currentPlayer);
  }
}

var game = new TicTacToe();

game.startGame();
*/
///////// Atividades aula 11 ////////
/*
// Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático (+, -, * ou /). Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
const a = parseInt(prompt(`Diga valor 1`));
const b = parseInt(prompt(`Diga valor 2`));
const c = prompt(`Diga  o operador`);
if (c == `*`) {
  console.log(a * b);
}
if (c == `/`) {
  console.log(a / b);
}
if (c == `+`) {
  console.log(a + b);
}
if (c == `-`) {
  console.log(a - b);
}

// Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato 'D de mesPorExtenso de AAAA'. Valide a data e retorne NULL caso a data seja inválida.
const data = prompt(`Diga a data(dd/mm/yyyy)`);
const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembero",
  "Outubro",
  "Novembro",
  "Dezembero",
];
if (
  data.slice(0, 2) * 1 <= 31 &&
  data.slice(0, 2) * 1 >= 1 &&
  data.slice(0, 2) * 1 >= 1 &&
  data.slice(0, 2) * 1 <= 13
) {
  console.log(
    `${data.slice(0, 2) * 1} de ${
      meses[data.slice(4, 5) * 1 - 1]
    } de ${data.slice(6, 10)}`
  );
} else {
  console.log(null);
}

// Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin. A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.
const temperatura = prompt(`Qual a temperatura?`);
const grau = prompt(`Qual grau?(C,F,K)`);
const temperaturaf = conversao(temperatura, grau);

function conversao(temp, g) {
  let Celsius = 0;
  let Fahrenheit = 0;
  let Kelvin = 0;

  if (g == `F`) {
    Fahrenheit = temp;
    Celsius = (5 / 9) * (Fahrenheit * 1 - 32);
    Kelvin = Celsius * 1 + 273;
  }
  if (g == `C`) {
    Celsius = temp;
    Fahrenheit = (9 / 5) * Celsius + 32;
    Kelvin = Celsius * 1 + 273;
  }
  if (g == `K`) {
    Kelvin = temp;
    Celsius = Kelvin * 1 - 273;
    Fahrenheit = (9 / 5) * Celsius + 32;
  }
  let c = prompt(
    `Qual valor deseja retornar?(C,F,K) \n${Celsius * 1}°C, ${
      Fahrenheit * 1
    }°F, ${Kelvin * 1}°K`
  );
  if (c == `F`) {
    return Fahrenheit * 1 + `°F`;
  }
  if (c == `C`) {
    return Celsius * 1 + `°C`;
  }
  if (c == `K`) {
    return Kelvin * 1 + `°K`;
  }
}
console.log(temperaturaf);

// Faça um programa que solicite o total gasto pelo cliente de uma loja, imprima as opções de pagamento com os valores totais, solicite a opção desejada e imprima o valor total das prestações (se houverem). Ao final ele deve retornar o valor total da opção escolhida, guardar em uma lista e recomeçar a operação perguntando o valor total gasto pelo próximo cliente. Quando o valor informado for 0, significa que não há mais clientes, então ele chamar uma nova função que vai mostrar quantas compras foram feitas em cada opção, e a soma do valor total de todas elas.
// Opção: a vista com 10% de desconto
// Opção: em duas vezes (preço da etiqueta)
// Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).
let gastototal = prompt(`Qual o valor gasto?`);
let recebidos = [];
while (gastototal != 0) {
  recebidos.push(pagar(gastototal));
  gastototal = prompt(`Qual o valor gasto?`);
}
function pagar(g) {
  if (g > 100) {
    const pagamento = prompt(
      `Quantas prestações?(1: a vista com 10%, 2: a preço de compra, 3-10:3% de juros(somente para compras acima de R$ 100,00))`
    );
    if (pagamento * 1 == 1) {
      return [g * 0.9, pagamento * 1];
    }
    if (pagamento * 1 == 2) {
      return [g / 2, pagamento * 1];
    }
    if (pagamento * 1 >= 3 && pagamento * 1 <= 10) {
      return [(g * 1.3) / pagamento, pagamento * 1];
    }
  }
  if (g <= 100) {
    const pagamento = prompt(
      `Quantas prestações?(1: a vista com 10%, 2: a preço de compra)`
    );
    if (pagamento * 1 == 1) {
      return [g * 0.9, pagamento * 1];
    }
    if (pagamento * 1 == 2) {
      return [g / 2, pagamento * 1];
    }
  }
}
console.log(recebidos);
*/
///////// Atividades aula 12 ////////
/*
// 1. Exercício – Treino: Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.
const a = prompt(`Diga valor 1`);
const b = prompt(`Diga valor 2`);
const contas = (a, b) =>
  console.log(
    `A soma dos dois é ${a * 1 + b * 1}\nA subtração dos dois é ${
      a * 1 - b * 1
    }\nA multipliação dos dois é ${a * b}\nA divião dos dois é ${a / b}`
  );
contas(a, b);

// 2. Exercício – Treino:  Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.
const numero = prompt(`Diga o número divisível por 3.`);
const checar = (n) => {
  return n % 3 == 0 ? true : false;
};
console.log(checar(numero));

// 3. Exercício – Treino: Faça um programa que tenha uma função chamada area(), que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno.
const area = () => {
  const lado1 = prompt(`Diga o lado 1.`);
  const lado2 = prompt(`Diga o lado 2.`);
  return lado1 * lado2;
};
console.log(area() + ` metros quadrados`);

// 4. Crie uma função que calcula a quantidade mínima de passos que o/a Master Bluemer precisa dar para atravessar uma rua qualquer, de acordo com os seguintes requisitos:
// O/A Master Bluemer (MB) deseja atravessar uma rua qualquer. Inicialmente, MB está localizado em uma posição X, e deseja chegar a uma posição maior ou igual a Y. A cada passo que MB dá, ele percorre uma distância fixa Z. Nossa função deve:
// Contar a quantidade mínima de passos que MB precisa dar para atravessar a rua, ou seja, sair da posição X e chegar ou ultrapassar à posição Y;
// Possuir 3 parâmetros (3 números inteiros X, Y e Z);
// Retornar um número mínimo de passos que inicie da posição X e vá para uma posição maior ou igual a Y.
// Exemplo de saída do programa
// Dando como exemplo os números de entrada:
// X = 5;
// Y = 40;
// D = 1.
// Ao dar um passo, deve ser somada a distância inicial + a distância do passo dado, ou seja:
// Ao dar um passo = 5 + 1;
// Dois passos: 5 + 1 + 1.
// E assim, sucessivamente, até chegar ou passar à distância final de 40.
const X = prompt(`Diga o ponto de início.`);
const Y = prompt(`Diga o ponto de fim.`);
const Z = prompt(`Diga a distância que cada passo percorre.`);
const passos = (x, y, z) => {
  const p = Math.ceil((y - x) / z);
  return p;
};
console.log(passos(X, Y, Z) + ` passos`);
*/
///////// Atividades aula 13 ////////
// Crie um objeto pessoa com os atributos: nome, idade, peso e altura. Além disso ela deve ter os métodos: Envelhecer, engordar, emagrecer, crescer. Por padrão, a cada ano que nossa pessoa envelhece até os 21 anos, ela deve crescer 0,5 cm. Crie um método bio que retorna uma string com todas as informações da pessoa.

const pessoa = {
  nome: "Fab",
  idade: 10,
  peso: 50,
  altura: 1.5,
  Envelhecer: function () {
    this.idade++;
    this.crescer();
  },
  engordar: function () {
    this.peso++;
  },
  emagrecer: function () {
    this.peso--;
  },
  crescer: function () {
    this.altura += 0.5;
  },
  bio: function () {
    return `Nome: ${this.nome}\nIdade: ${this.idade}\nPeso: ${this.peso}\nAltura: ${this.altura}\n`;
  },
};
console.log(pessoa.bio());

// Crie um sistema de cadastro de funcionários que deve criar um objeto novo para cada funcionário cadastrado com as informações: nome, cargo e salário. Ele deve armazenar todos esses objetos em uma lista. Ao final de cada cadastro ele deve perguntar se deseja cadastrar um novo funcionário e recomeçar o processo, e caso não haja mais funcionários para cadastrar.
const funcionarios = [];

let i = "S";
while (i == "S") {
  i = prompt(`Deseja cadastrar novo funcionário?(S/N)`);
  if (i == "S") {
    const nome = prompt(`Qual o nome?`);
    const cargo = prompt(`Qual o cargo?(professor,jardineiro,pimp)`);
    const salario = prompt(`Qual o salário?`);
    const funcionario = { nome: nome, cargo: cargo, salario: salario };
    funcionarios.push(funcionario);
  }
}

//Chamar uma função que deve apresentar a quantidade de funcionários com cada cargo e os nomes deles. (Você pode limitar as opções de cargo para facilitar.)
function cargos(arr) {
  const pimp = [];
  const prof = [];
  const jar = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].cargo == `professor`) {
      prof.push(arr[i].nome);
    }
    if (arr[i].cargo == `jardineiro`) {
      jar.push(arr[i].nome);
    }
    if (arr[i].cargo == `pimp`) {
      pimp.push(arr[i].nome);
    }
  }
  return `Nós temos ${pimp.length} pimps: ${pimp}.\nNós temos ${prof.length} professores: ${prof}.\nNós temos ${jar.length} jardineiros: ${jar}.\n`;
}
cargos(funcionarios);

// Implementando o exercício anterior, escreva uma função que deve calcular um aumento de salário baseado no cargo. Ela deve receber como argumento o cargo que receberá o aumento, e a taxa que ele irá aumentar. Após isso, aplique esse aumento à todos os funcionários daquele cargo e exiba o valor dos novos salários.
function aumento(arr) {
  const c = prompt(`Qual cargo receberá o aumento?`);
  const tx = prompt(`Qual a taxa do aumento?`);
  for (i = 0; i < arr.length; i++) {
    if (arr[i].cargo == c) {
      arr[i].salario = arr[i].salario * tx;
      console.log(`O novo salário de ${arr[i].nome} é de ${arr[i].salario}.`);
    }
  }
}
aumento(funcionarios);

// Faça um programa de agenda telefônica que deve ter as funções: Adicionar, Alterar, Deletar e Consultar.
const agenda = {
  contatos: [],
  Adicionar: function () {
    const a = prompt(`Qual o Contatoa ser adicionado?`);
    const b = prompt(`Qual o telefone?`);
    this.contatos.push([a, b]);
  },
  Alterar: function () {
    const a = prompt(`Qual o Contato a ser alterado?`);
    const b = prompt(`Qual o novo telefone?`);
    let c = 0;
    for (i = 0; i < this.contatos.length; i++) {
      if (this.contatos[i][0] == a) {
        this.contatos[i][1] = b;
        c++;
      }
    }
    if (c == 0) {
      console.log(`Contato não existe.`);
    }
  },
  Deletar: function () {
    const a = prompt(`Qual o Contato a ser removido?`);
    for (var i = 0; i < this.contatos.length; i++) {
      if (this.contatos[i][0] == a) {
        this.contatos.splice(i, 1);
      }
    }
  },
  Consultar: function () {
    const a = prompt(`Qual o Contato?`);
    let c = 0;
    for (i = 0; i < this.contatos.length; i++) {
      if (this.contatos[i][0] == a) {
        console.log(`O número de ${a} é ${this.contatos[i][1]}.`);
        c++;
      }
    }
    if (c == 0) {
      console.log(`Contato não existe.`);
    }
  },
};
// Ao adicionar um novo contato, ele deve criar um objeto com os atributos nome e telefone, e adicionar esse objeto à uma lista com todos os contatos.
agenda.Adicionar();
agenda.Adicionar();
agenda.Adicionar();
// Ao alterar, ele deve receber o nome do contato a ser alterado e o novo telefone. Exiba uma mensagem de erro caso o contato não exista.
agenda.Alterar();
// Ao deletar, ele deve apagar o objeto com o nome passado.
agenda.Deletar();
// Ao consultar, ele deve receber um nome e procurar esse contato na agenda exibindo o número. Exiba uma mensagem de erro caso o contato não exista.
agenda.Consultar();
