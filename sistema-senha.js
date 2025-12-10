let senhaCorreta = "Luan O bam bam bam";
let tentativas = 0;
let senhaDigitada;

while (tentativas < 3) {
  senhaDigitada = prompt("Digite sua senha:");
  
  if (senhaDigitada === senhaCorreta) {
    console.log("Senha correta!");
    break;
  } else {
    console.log("Senha incorreta!");
    tentativas++;
  }
}

if (tentativas === 3) {
  console.log("Acesso bloqueado");
}
