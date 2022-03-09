"use strict";

const prompt = require(`prompt-sync`)();

///// Projeto 1/////// - A Jornada do Herói
// Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, por exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", "Você conseguiu consertar os reatores nucleares do motor de dobra?", "Você se lembrou de passar no mercado e comprar óleo?"
// No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o resultado de acordo com esse número:
// 0 respostas Sim: Você falha miseravelmente.
// 1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
// 3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
// 4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
// 5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
// O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima.

console.log(
  "Você precisa comprar roupas para sua mulher, sua missão é fazer ela não brigar quando você chegar,\n precisa escolher 4 peças de roupas e ainda responder uma pergunta dela no final, boa sorte!."
);

let contador = 0;
console.log(
  "Você seleciona o vestido que sua mulher gosta e o vendedor mostra dois tamanhos de vestidos um maior e outro do tamanho exato dela."
);
let resp1 = prompt("Você seleciona o vestido maior? (S/N)");
while (resp1.toUpperCase() != "S" && resp1.toUpperCase() != "N") {
  resp1 = prompt(
    "Você seleciona o vestido maior? Favor selecionar uma das opções(S/N)"
  );
}
if (resp1.toUpperCase() == "S") {
  contador++;
}
console.log(
  "Você seleciona o sapato que sua mulher gosta e o vendedor mostra dois tamanhos de sapatos um menor e outro do tamanho exato dela."
);
resp1 = prompt("Você seleciona o sapato menor? (S/N)");
while (resp1.toUpperCase() != "S" && resp1.toUpperCase() != "N") {
  resp1 = prompt(
    "Você seleciona o sapato menor? Favor selecionar uma das opções(S/N)"
  );
}
if (resp1.toUpperCase() == "S") {
  contador++;
}
console.log(
  "Você pede para ver os brincos e o vendedor mostra dois pares de brincos um mais caro da marca que da inveja nas amigas embora bem feio e outro mais barato mas muito bonito."
);
resp1 = prompt("Você seleciona o brinco feio? (S/N)");
while (resp1.toUpperCase() != "S" && resp1.toUpperCase() != "N") {
  resp1 = prompt(
    "Você seleciona o brinco feio? Favor selecionar uma das opções(S/N)"
  );
}
if (resp1.toUpperCase() == "S") {
  contador++;
}
console.log(
  "Você pede para ver a seleção de langerie e o vendedor mostra dois um super sexy e outra confortável que cobre tudo."
);
resp1 = prompt("Você seleciona o sexy? (S/N)");
while (resp1.toUpperCase() != "S" && resp1.toUpperCase() != "N") {
  resp1 = prompt("Você seleciona o sexy? Favor selecionar uma das opções(S/N)");
}
if (resp1.toUpperCase() == "S") {
  contador++;
}
console.log(
  "Você chegou em casa e ela experimenta o vestido, quando ela termina de se olhar no espelho te pergunta."
);
resp1 = prompt("Esse vestido me deixa bonita? (S/N)");
while (resp1.toUpperCase() != "S" && resp1.toUpperCase() != "N") {
  resp1 = prompt(
    "Esse vestido me deixa bonita? Favor selecionar uma das opções(S/N)"
  );
}
if (resp1.toUpperCase() == "S") {
  contador++;
}

if (contador == 0) {
  console.log("Você é a maior falha como marido de todos os tempos. Divórcio.");
} else if (contador == 1 || contador == 2) {
  console.log("Prepare-se para uma briga e ajuda com psicólogo de casais.");
} else if (contador == 3) {
  console.log(
    "Pequena briga, mas vendo pelo lado positivo, ainda acaba somente nela, mas nada de nheco-nheco."
  );
} else if (contador == 4) {
  console.log(
    "Foi por pouco e ainda teve uma leve discussão, mas nada que fosse ser uma briga."
  );
} else if (contador == 5) {
  console.log(
    "Se safou por completo, ufa prepare-se para uma baita noite, não esqueceu das camisinhas certo?"
  );
}

///// Projeto 2/////// - Jokenpô
// O Jokenpô é o popular jogo do "Pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.
// Pedra ganha da tesoura, mas perde para o papel;
// Tesoura ganha do papel, mas perde para a pedra;
// Papel ganha da pedra, mas perde para a tesoura.
// E para esse projeto você deve desenvolver um programa capaz de :
// Receber o elemento escolhido pelo usuário;
// Escolher um elemento aleatório para o computador;
// Comparar os dois elementos e declarar um vencedor.
// Você pode adaptar o jogo ao seu projeto criado anteriormente (por exemplo fazer um: "Espada, Escudo e Magia") para incrementar ainda mais o seu projeto. Apenas lembre-se de deixar claro para o usuário como funcionará o jogo nesse caso (quem ganha e quem perde de quem).

// Requisitos
// Para esse projeto, os requisitos fundamentais serão:
// Permitir que eu decida quantas rodadas iremos fazer;
// Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
// Decidir de forma aleatória a decisão do computador;
// Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
// Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
// Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
// Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.

/*
let rodadas = prompt("Quantas rodadas?");
let vitorias = 0;
let derrotas = 0;
let jaken = 0;
let joken = 0;
let jogar = "";
let i = 1;
const options = ["0: Pedra", "1: Papel", "2: Tesoura"];

while (i <= rodadas) {
  joken = Math.floor(Math.random() * 3);
  jaken = prompt(`Qual vai tentar? \n ${options} \n`);
  if (
    (jaken == 0 && joken == 2) ||
    (jaken == 1 && joken == 0) ||
    (jaken == 2 && joken == 1)
  ) {
    vitorias++;
    console.log(
      `Ganhou com ${options[jaken]} e o computador com ${options[joken]}`
    );
  } else if (
    (jaken == 0 && joken == 1) ||
    (jaken == 1 && joken == 2) ||
    (jaken == 2 && joken == 0)
  ) {
    derrotas++;
    console.log(
      `Perdeu com ${options[jaken]} e o computador com ${options[joken]}`
    );
  } else {
    console.log(
      `Empate com ${options[jaken]} e o computador com ${options[joken]}`
    );
  }
  i++;
  if (i > rodadas) {
    if (vitorias > derrotas) {
      console.log(
        `Parabéns, você venceu com ${vitorias} vitórias e ${derrotas} derrotas.`
      );
    } else {
      console.log(
        `Que pena, você perdeu com ${vitorias} vitórias e ${derrotas} derrotas.`
      );
    }
    jogar = prompt("Deseja jogar novamente?(S/N)");
    if (jogar == "S") {
      i = 1;
      rodadas = prompt("Quantas rodadas?");
      vitorias = 0;
      derrotas = 0;
    }
  }
}
*/

///// Projeto final/////// - Jogo de Ficção Interativa
// O que é ficção interativa? Ficção interativa, geralmente abreviada como IF, é um software de emulação de ambientes no qual os jogadores usam comandos de texto para controlar personagens do jogo e influenciar o ambiente. São jogos baseados em texto, que se tornaram muito populares em uma época em que os computadores ainda não tinham a capacidade de processamento para processar jogos com uma interface gráfica muito avançada.
// O jogo se baseia em uma história em que você determina as ações do seu personagem através de escolhas que são dadas a cada momento. Cada uma dessas escolhas pode influenciar diretamente como a história se desenrolará, alterando as possibilidades e dando novas alternativas ao seu personagem.
// Como será o projeto
// Você irá criar um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de estudos, aventuras épicas, histórias assustadoras, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza pela história. Cada escolha irá gerar uma consequência diferente para o seu personagem. Você será responsável por determinar o inicio e término da história, além de avançar o tempo a cada escolha.
// É importante que haja uma passagem de tempo e períodos determinados que determinarão os ciclos de repetição das possibilidades do personagem, por exemplo: Manhã, tarde, noite, dormir - Recomeça o ciclo.
// É obrigatório o uso funções, laços (while/for) e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
// Use toda sua criatividade para desenvolver uma história interessante e seja bem específico com relação as escolhas que precisam ser feitas, para que seu jogo seja divertido! Lembre-se que as escolhas devem impactar no que acontecerá com o personagem no decorrer da história, e adicionar eventos que podem ocorrer de maneira aleatória é uma boa ideia para tornar o seu jogo mais interessante.

// Para hoje
// Você deve pensar no tema da sua história, e produzir um esboço de como ela será desenvolvida.
// Quem é o personagem?
// Usuário
// Quais os seus desafios?
// Se alimentar de maneira controlada durante o dia (3 vezes no mínimo).
// Que opções de escolha ele pode ter a cada período?
// opções de comida com impacto a fome, saúde e calorias.
// Como essas escolhas vão impactar na história e nas possibilidades de escolha futuras?
// muitas calorias pode dar um resultado negativo assim como muita fome, mas pouca caloria melhora o resultado assim como pouca fome.
// Como você irá controlar o passar do tempo?
// com um contador em fome e horas sem comer.

// Com isso pronto você já pode começar a colocar em código:
// Crie variáveis para armazenar os status do personagem (Fome? Dinheiro? Saúde? Força?). Que tipo de variável seria a mais adequada para isso?
/*
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

// Crie perguntas que alterarão esses status para testar sua funcionalidade;

// Crie um laço de repetição que determinará os ciclos em que a história vai se passar. O que acontecerá ao final do ciclo? Como ficarão os status?
// Lembre-se: Use sua criatividade, mas cuidado para não criar um projeto megalomaníaco! Vocês terão um bom tempo para fazer o projeto, mas durante esse tempo com certeza novas ideias surgirão e você precisará fazer várias alterações. A tentação pode ser grande, mas cuidado para não deixar o projeto tomar proporções de modo que não seja possível de ser executado dentro do prazo dado.

// Agora você já deve ter uma boa ideia de como será a sua história e como serão as escolhas do seu personagem. Para hoje vamos implementar mais algumas funcionalidades:
// Variável para controle da passagem do tempo;
// Controle do fim e recomeço do ciclo;
// Variáveis de controle dos status e situações da história;
// Condicionais para alterações dessas variáveis.
// A ideia é que seu projeto comece a ganhar forma, e já seja capaz de fazer algumas perguntas que irão modificar os aspectos do jogo.
// Conforme essas escolhas vão sendo feitas o tempo deve ir passando, e após um período determinado, deve-se encerrar o ciclo atual e começar um novo, com atualização do status do personagem e voltar às escolhas de ação.

// Seu projeto já deve estar ganhando forma e com algumas funções já incrementadas e funcionando:
// Controle de status do personagem;
// Condições que determinarão mudanças no status e variáveis de controle do jogo;
// Um controle de passagem de tempo que determina o começo e o fim de cada ciclo.
// Agora podemos começar a organizar tudo isso, e seria bom pensarmos em funções para executar cada uma das tarefas. Portanto para hoje nossos objetivos serão:
// Determinar quais funções serão usadas (Determinar fim do ciclo? Resetar os status do personagem? Fazer controle da passagem de tempo?);
// Determinar quais variáveis serão usadas e alteradas por elas;
// Implementar essas funções de maneira eficiente;
// Com isso nosso projeto já deve estar bem encaminhado e com todas as funcionalidades implementadas e funcionando adequadamente. Veja o que você já tem e o que será possível ainda incrementar com o tempo restante.

// O projeto já deve estar com as funcionalidades bem implementadas, revise se ele atende a todos os requisitos (objetos, funções, condicionais, for, while...)
// Faça os ajustes e validações necessárias para que ele funcione perfeitamente:
// As perguntas estão funcionando e alterando as variáveis corretamente?
// As condições que irão usar essas variáveis estão funcionando?
// As funções estão sendo chamadas na hora correta e alterando as variáveis certas?
// O controle de tempo está funcionando?
// Se tudo estiver certinho, você pode ir incrementando sua história e pensar em maneiras de deixar seu jogo mais interessante!
// Lembre-se de que o que foi passado são apenas os requisitos básicos para o jogo, mas você pode (e deve) procurar outras funcionalidades e extrapolar o que foi passado em aula! Use sua criatividade e crie um jogo que você se sinta orgulhoso(a) de ter feito!
// Mais uma vez, todos os projetos que forem entregues e estiverem funcionando, recebem o certificado de conclusão de projeto! E aqueles que conseguirem ir além e inovar em seus projetos, recebem o certificado de projeto estaque!
// Qualquer dúvida não hesite em procurar ajuda!

///// Projeto extra/////// - Jogo de dados
// Esse projeto não deve ser entregue, é apenas um exercício

// Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios. O programa deve:
// Perguntar quantas rodadas você quer fazer;
// Perguntar quantos jogadores vão jogar;
// Criar um objeto pra cada jogador com nome e número tirado;
// Guarda todos os objetos em uma lista;
// Ordenar esses objetos, sabendo que o vencedor tirou o maior número no dado.
// Mostrar no final qual jogador ganhou mais rodadas e foi o grande campeão.
/*
let roda = prompt("Quantas rodadas?");
let qtd = prompt("Quantos jogadores?");
let lista = new Array(qtd);
let controle =0;
for (let i = 0; i < qtd; i++) {
  lista[i]  = {Nome:"", guess:0,vencedor:0};
  lista[i].Nome = prompt(`Qual o nome do jogador ${i+1}?`)
}

for (let j = 0; j < roda; j++) {
  for (let i = 0; i < qtd; i++) {
    lista[i].guess = Math.floor(Math.random() * (7 - 1)) + 1
    if (i>0 && lista[i].guess>lista[i-1].guess){
      controle=i;
    }
    if (i==qtd-1){
      lista[controle].vencedor++;
    }
  }
  console.log(lista)
}

function compare( a, b ) {
  if ( a.vencedor < b.vencedor ){
    return 1;
  }
  if ( a.vencedor > b.vencedor ){
    return -1;
  }
  return 0;
}

lista.sort( compare );
console.log(lista);
*/
