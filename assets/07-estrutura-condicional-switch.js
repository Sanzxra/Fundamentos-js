// O switch/case ele também é uma estrutura condicional
// Geralmente usado quando temos várias condições para verificar

// Ele é ideal quando você quer testar UM ÚNICO VALOR contra multiplas possibilidades, tipo, uma variável, expressão ou resultado de uma função

/*
Exemplo da estrutura switch/case:

switch (expressão/condição, variável) {
  case valor1:
    // código a ser executado se a expressão for igual a valor1
}   
*/

let opcao = 0;

switch (opcao) {
  case 1:
    console.log("Falar com o atendente.");
    break; // break é usado para sair do switch após encontrar o caso correspondente

    case 2:
      console.log("Fazer um depósito.");
        break;

    case 3:
      console.log("Fazer um saque.");
        break;
    
}


let operador = "+";

switch (operador) {
  case "+":
    console.log("Operação de adição selecionada.");
    break;

    case "-":
      console.log("Operação de subtração selecionada.");
        break;

    case "*":
      console.log("Operação de multiplicação selecionada.");
        break;

    case "/":
      console.log("Operação de divisão selecionada.");
        break;
}
