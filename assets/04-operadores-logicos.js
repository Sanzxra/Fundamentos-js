// Os operadores lógicos são usados para combinar expressões booleanas, ou seja, sempre que comparamos valores usamos operadores lógicos para determinar se a expressão é veradeira ou falsa.

// Os mais comuns são:
// && (AND) - E
// || (OR) - OU
// ! (NOT) - 

let numero1 = Number(prompt("Informe o primeiro valor: "));
let numero2 = Number(prompt("Informe o segundo valor: "));

if (numero1 > numero2) {
    console.log(`O número ${numero1} é maior que o número ${numero2}.`);
} else if (numero1 < numero2) {
    console.log(`O número ${numero1} é menor que o número ${numero2}`);
} else {
    console.log("Os números informados são iguais");
}