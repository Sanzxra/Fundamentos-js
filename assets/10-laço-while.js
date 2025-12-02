// Usamos o While quando não sabemos exatamente quantas vezes o loop vai se repetir.

// Geralmente sabemos  a condição que precisa permanecer verdadeira.

/*
let variavelDeControle = 0;
while (condição) {
    // bloco de código a ser executado ENQUANTO a condição for verdadeira

    // incremento/decremento
       variavelDeControle++;
}

*/

let numero = 0;
while (numero <= 10) {
    console.log("O número é: " + numero);

    // Incremento - atualiza do valor da variável de controle, garantindo que o loop eventualmente termine.
    numero++;
}

let entrada  = "ok";
while (entrada === "ok") {
    entrada = prompt("Digite 'ok' para continuar");
}