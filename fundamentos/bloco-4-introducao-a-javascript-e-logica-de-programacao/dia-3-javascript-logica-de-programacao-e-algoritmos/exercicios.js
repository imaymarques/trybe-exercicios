
//_______________________________________________________________________________________________________________

/* 1. Encontre o index através do valor de um elemento

Escreva uma algoritmo que recebe 2 parâmetros:
 - Um array
 - O valor de um elemento de tipo primitivo

Imprima no terminal a posição index em que o elemento encontra-se.

Caso não o encontre, imprima:
-----------------------------------
"Elemento não encontrado no array"
-----------------------------------
*/

let array = [2, 14, 65, 54, 10, 12, 16, 22];
let element = 14;

function findIndexOf(array, element) {
    for (let elem of array) {
      if (elem === element) {
        return array.indexOf(element);
      }
    }
    return "Elemento não encontrado no array.";
  }







//_______________________________________________________________________________________________________________
/*
2. Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:
----------------
"x, y, z, ...n"
----------------

_______________________________________________________________________________________________________________

3. Números divisíveis por 3

Escreva um algoritmo que cria uma sequência numérica de inteiros de razão 1, o algoritmo deve receber antes de
 criar o valor inicial e final.

Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

Se houver 50 ou mais:
---------------------------------------
"Há 50 ou mais números diviseis por 3"
---------------------------------------

Caso o contrário:
--------------------------
"Sequência muito pequena."
--------------------------

*///______________________________________________________________________________________________________________
