"use strict";

const prompt = require(`prompt-sync`)();

///// Projeto final/////// - Jogo de Ficção Interativa
// O que é ficção interativa? Ficção interativa, geralmente abreviada como IF, é um software de emulação de ambientes no qual os jogadores usam comandos de texto para controlar personagens do jogo e influenciar o ambiente. São jogos baseados em texto, que se tornaram muito populares em uma época em que os computadores ainda não tinham a capacidade de processamento para processar jogos com uma interface gráfica muito avançada.
// O jogo se baseia em uma história em que você determina as ações do seu personagem através de escolhas que são dadas a cada momento. Cada uma dessas escolhas pode influenciar diretamente como a história se desenrolará, alterando as possibilidades e dando novas alternativas ao seu personagem.
// Como será o projeto
// Você irá criar um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de estudos, aventuras épicas, histórias assustadoras, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza pela história. Cada escolha irá gerar uma consequência diferente para o seu personagem. Você será responsável por determinar o inicio e término da história, além de avançar o tempo a cada escolha.
// É importante que haja uma passagem de tempo e períodos determinados que determinarão os ciclos de repetição das possibilidades do personagem, por exemplo: Manhã, tarde, noite, dormir - Recomeça o ciclo.
// É obrigatório o uso funções, laços (while/for) e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
// Use toda sua criatividade para desenvolver uma história interessante e seja bem específico com relação as escolhas que precisam ser feitas, para que seu jogo seja divertido! Lembre-se que as escolhas devem impactar no que acontecerá com o personagem no decorrer da história, e adicionar eventos que podem ocorrer de maneira aleatória é uma boa ideia para tornar o seu jogo mais interessante.

console.log(
  "Você está de dieta e tem de controlar o que come no dia sem fazer sua quantidade de calorias passar do objetivo.(para ter sucesso tem de atingir consumo de caloria até o objetivo ou pelo menos até 20% abaixo dele)"
);
let Caloria = 0;
let opcoes = [];
const status = [`anoréxico`, `saudável`, `engordando`];
const tempo = 3;
const objetivo = parseInt(
  prompt(
    `Quantas calorias deseja consumir hoje?(dificuldade do jogo pode aterar dependendo da quantidade.Tente ser saudável e não anorexico).`
  )
);
let cal = 0;

for (let i = 0; i < tempo; i++) {
  if (i == 0) {
    opcoes = [
      `0: Ovos com bacon(${parseInt(objetivo / 2)} calorias)`,
      `1: Café com pão(${parseInt(objetivo / 3)} calorias))`,
      `2: Café puro(${parseInt(objetivo / 5)} calorias)`,
      `3: Nada(0 calorias)`,
    ];
    cal = parseInt(prompt(`Qual o seu café da manhã?\n ${opcoes}`));
    if (cal == 0) {
      Caloria += parseInt(objetivo / 2);
    } else if (cal == 1) {
      Caloria += parseInt(objetivo / 3);
    } else if (cal == 2) {
      Caloria += parseInt(objetivo / 5);
    }
  }
  if (i == 1) {
    opcoes = [
      `0: Vegetariano(${parseInt(objetivo / 5)} calorias)`,
      `1: Churrasco com tudo(${parseInt(objetivo)} calorias)`,
      `2: Vegano(${parseInt(objetivo / 8)} calorias)`,
      `3: Nada(0 calorias)`,
    ];
    cal = parseInt(prompt(`Qual o seu almoço?\n ${opcoes}`));
    if (cal == 0) {
      Caloria += parseInt(objetivo / 5);
    } else if (cal == 1) {
      Caloria += parseInt(objetivo);
    } else if (cal == 2) {
      Caloria += parseInt(objetivo / 8);
    }
  }
  if (i == 2) {
    opcoes = [
      `0: Janta Vegetariana(${parseInt(objetivo / 5)} calorias)`,
      `1: Pizza(${parseInt(objetivo / 2)} calorias)`,
      `2: Misto quente(${parseInt(objetivo / 3)} calorias)`,
      `3: Nada(0 calorias)`,
    ];
    cal = parseInt(prompt(`Alguma janta ou lanche de noite?\n ${opcoes}`));
    if (cal == 0) {
      Caloria += parseInt(objetivo / 5);
    } else if (cal == 1) {
      Caloria += parseInt(objetivo / 3);
    } else if (cal == 2) {
      Caloria += parseInt(objetivo / 2);
    }
  }
}
if (Caloria > objetivo) {
  console.log(
    `Você ultrapassou seu objetivo e está ${status[2]}, tente se alimentar melhor, está consumindo ${Caloria} calorias.`
  );
} else if (Caloria <= objetivo * 0.8) {
  console.log(
    `Você esta se alimentando abaixo do objetivo e está ${status[0]}, tente se alimentar melhor, está consumindo  ${Caloria} calorias.`
  );
} else {
  console.log(
    `Parabéns está atingindo o objetivo e está ${status[1]} consumindo ${Caloria} calorias.`
  );
}
