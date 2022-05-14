/*9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2. */

let num = [];

for (let index = 0; index <= 25; index += 1){
    num.push(index);
}
for (let div of num){
    div = div / 2;
    console.log(div)
}