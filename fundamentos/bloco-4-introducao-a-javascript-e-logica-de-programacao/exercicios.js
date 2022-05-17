/* 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. */


let fatorial = 10;

for(index = 1; index < 10; index += 1){
    fatorial = fatorial * index
}
console.log(fatorial);

/* 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. */

let word = 'trybe';
let nova = '';

for(let index = word.length - 1; index >=0; index -= 1){
    nova = nova + word[index]
}
console.log(nova);

/* 3- Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = [];
let menorPalavra = array[0];

for(let index = 0; index < array.length; index += 1){
    if(array[index].length > maiorPalavra.length){
        maiorPalavra = array[index]
    }
}
for(let index = 0; index < array.length; index += 1){
    if(array[index] < menorPalavra){
        menorPalavra = array[index]
    }
}
console.log('A maior palavra é: ', maiorPalavra);
console.log('A menor palavra: ', menorPalavra);

/* 4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. */

let maiorNumeroPrimo = 0;

for(let index = 0; index < 50; index += 1){
    let primo = true;
    for (let divisor = 2; divisor < index; divisor +=1){
        if (index % divisor === 0){
            primo = false;
        }
    }
    if (primo){
        maiorNumeroPrimo = index;
}
}