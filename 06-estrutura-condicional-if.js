// Estruturas condicionais são recursos de programação que permitem executar diferentes blocos de código com base em condições específicas. Ou seja, serve basicamente para tomar decisões no código.

let idade = prompt("Digite sua idade:");

//if (se) - executa um bloco de código se uma condição for verdadeira
// id simples 
if (idade >= 18) {
  console.log("Você é maior de idade.");
  alert("Você é maior de idade.");
}


let emailEsperado = "luan@gmail.com";
let email = prompt("Digite seu email:");

if (email === emailEsperado) {
  console.log("Email correto. Acesso concedido.");
  alert('Email correto. Acesso concedido para ${email}');
} else {
  console.log("Email incorreto. Acesso negado.");
  alert("Email incorreto. Acesso negado.");
}

let hora = 11:
if (11 < 10) {
  console.log("Bom dia!");
} else
  console.log("Boa noite!");


//if encadeado - if/else/else if - permite verificar múltiplas condições em sequência

let nota = 8;
if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 7) {
  console.log("Muito bom!");
} else {
  console.log("Precisa melhorar.");
}