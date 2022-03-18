"use strict";

const prompt = require(`prompt-sync`)();

///// Projeto extra/////// - Jogo de dados
// Esse projeto não deve ser entregue, é apenas um exercício

// Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios. O programa deve:
// Perguntar quantas rodadas você quer fazer;
// Perguntar quantos jogadores vão jogar;
// Criar um objeto pra cada jogador com nome e número tirado;
// Guarda todos os objetos em uma lista;
// Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
// Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.

let roda = prompt("Quantas rodadas?");
let qtd = prompt("Quantos jogadores?");
let lista = new Array(qtd);
let controle = 0;
for (let i = 0; i < qtd; i++) {
  lista[i] = { Nome: "", guess: 0, vencedor: 0 };
  lista[i].Nome = prompt(`Qual o nome do jogador ${i + 1}?`);
}

for (let j = 0; j < roda; j++) {
  for (let i = 0; i < qtd; i++) {
    lista[i].guess = Math.floor(Math.random() * (7 - 1)) + 1;
    if (i > 0 && lista[i].guess > lista[i - 1].guess) {
      controle = i;
    }
    if (i == qtd - 1) {
      lista[controle].vencedor++;
    }
  }
  console.log(lista);
}

function compare(a, b) {
  if (a.vencedor < b.vencedor) {
    return 1;
  }
  if (a.vencedor > b.vencedor) {
    return -1;
  }
  return 0;
}

lista.sort(compare);
console.log(lista);
