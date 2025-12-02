// Uma função, principlamente no JS, ela é utilizada pra gente reutilizar uma determinada ação no nosso código. A ideia é criar a função a fim de evitar repetição de código desnecessária.

/* 

 Sintaxe:

    function nomeDaFuncao() {
        // bloco de código que será executado
    }

*/

function banana() {
    console.log("Função da banana!");
}

// Para a função funcionar, precisamos "invocá-la" ou "chamá-la". Para isso, basta escrever o nome da função seguido de parênteses:

banana(); // Chamando a função


// Trabalhando com parametros em funções 
function saudacao(nomeUsuario) {
    console.log('Olá, Muito prazer ${nomeUsuario}');
}
saudacao(); // Chamando a função

