/* 4. Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. */

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
console.log(maiorNumeroPrimo);


// let biggestPrimeNumber = 0;

// for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);

