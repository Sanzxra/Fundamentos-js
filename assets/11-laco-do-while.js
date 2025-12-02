// Sobre o laço do...while (faça...enquanto)


/*
 Sintaxe:

    do {
        // bloco de código que será executado
    } while (condição)


    while(condição) {
      // bloco de código que será executado
    }
*/

let senha;

do {
    senha = prompt("Digite sua senha: ");
} while (senha !== "1234");
