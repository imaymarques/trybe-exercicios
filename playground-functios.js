// Desafio 1
function compareTrue(parametro1, parametro2) {
    if (parametro1 && parametro2){
      return true;
    } else {
      return false;
    }
  }
  
  // Desafio 2
  function calcArea(base, height) {
    let resultado = 0;
    resultado = (base * height) / 2;
    return resultado;
  }
  
  // Desafio 3
  function splitSentence(palavras) {
    let resultado = palavras.split(" ");
    return resultado;
  }
  // Desafio 4
  function concatName(array) {
    return array[(array.length - 1)] + ", " + array[0];
  }
  // Desafio 5
  function footballPoints(wins, ties) {
    return wins * 3 + ties;
  }
  // Desafio 6
  function highestCount(maiorValor) {
    let maiorNum = Math.max(...maiorValor);
    let contador = 0;
    for (let index = 0; index < maiorValor.length; index += 1) {
      if (maiorValor[index] === maiorNum) {
        contador += 1;
      }
    }
    return contador;
  }
  
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    let distancia1 = Math.abs(cat1 - mouse);
    let distancia2 = Math.abs(cat2 - mouse);
    if (distancia1 < distancia2) {
      return 'cat1';
    } else if (distancia2 < distancia1) {
      return 'cat2';
    } else {
      return 'os gatos trombam e o rato foge';
    }
  }
  
  // Desafio 8
  function fizzBuzz(array) {
    let resultado = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] % 5 === 0 && array[index] % 3 === 0){
        resultado.push('fizzBuzz');
      } else if (array[index] % 5 === 0) {
        resultado.push('buzz');
      } else if (array[index] % 3 === 0) {
        resultado.push('fizz');
      } else {
        resultado.push('bug!');
      }
    }
    return resultado;
  }
  
  // Desafio 9
  function encode(codifica) {
    let palavra = codifica
      .replace(/a/g, 1)
      .replace(/e/g, 2)
      .replace(/i/g, 3)
      .replace(/o/g, 4)
      .replace(/u/g, 5);
    return palavra;
  }
  function decode(decodifica) {
    let palavra = decodifica
      .replace(/1/g, 'a')
      .replace(/2/g, 'e')
      .replace(/3/g, 'i')
      .replace(/4/g, 'o')
      .replace(/5/g, 'u');
    return palavra;
  }
  
  // Desafio 10
  function techList(tecnologias, nome) {
    let array = tecnologias.sort();
    let objeto = [];
    if (tecnologias.length < nome.length) {
      return 'Vazio!';
    }
    for (let index = 0; index < array.length; index += 1) {
      objeto.push({'tech' : tecnologias[index], 'name' : nome});
    }
    return objeto;
  }
  