/* 3. Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css'];
let big = [0];
let small = array[0];

for (let index = 0; index < array.length; index += 1){
    if (array[index].length > big.length){
        big = array[index];
    }
}
for (let index = 0; index < array.length; index += 1){
    if (array[index].length < small.length){
        small = array[index];
    }
}
console.log('A maior palavra é: ', big);
console.log('A menor palavra é: ', small);
