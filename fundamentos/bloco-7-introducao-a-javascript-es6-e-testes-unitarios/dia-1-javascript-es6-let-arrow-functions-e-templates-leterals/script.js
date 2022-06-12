//                  PARTE 1:
// 🚀 1. Altere as variáveis para respeitarem o escopo em que foram declaradas.
// * Modifique a estrutura da função para que ela seja uma arrow function;
// * Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// * Modifique as concatenações para template literals.


const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} 'ótimo, fui utilizada no escopo!'`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(false);

  // 🚀 2. Crie uma função que retorne um array em ordem crescente.
// * Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// * Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.
// * Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// * Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((a,b) => a - b);
  console.log(`'Os números ${oddsAndEvens} se encontram ordenados de forma crescente!'`);

  //                 PARTE 2:
//   1. Crie uma função que receba um número e retorne seu fatorial.
//   * Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = (num) => {
    if (num > 1) {
        return num * fatorial (num -1);
    }
    return num;
}

console.log(fatorial(5));

// Tenary Operator teste:
const contador = (10 + 20 === 50) ? `essa expressão está correta` : `essa expressão é falsa`;
console.log(contador);

// 2. Crie uma função que receba uma frase e retorne a maior palavra.
const longestWord = (text) => {
    let wordArray = text.split(' ');
    let biggest = 0;
    let result = '';
    for (const index of wordArray) {
        if (index.length > biggest) {
            biggest = index.length;
            result = index;
        }
    }
    return result;
}
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// 🚀 3. Crie uma página com um contador de cliques.
// Sua página deve conter:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const getButton = document.getElementById('click');
const getP = document.getElementById('contador');
let clickCount = 0;
getButton.addEventListener('click', function() {
  clickCount += 1;
  if (clickCount === 1) {
    getP.innerHTML = `${clickCount} clique`;
  } else {
      getP.innerHTML = `${clickCount} cliques`;
    }
});
// FUNÇÃO 1:
// 🚀 4. Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

const newPhrase = (nome) => {
  const frase = 'Tryber x aqui!';
  let resultado = frase.replace('x', nome);
  return resultado;
}
console.log(newPhrase('Mayara'));

// FUNÇÃO 2:
// Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// A função deverá receber o retorno da Função 1 por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

const newValue = (parametro) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `${parametro}
  Minhas três principais habilidades são:
  ${skills}`;
  return resultado;
}
console.log(newValue(newPhrase('Mayara')));