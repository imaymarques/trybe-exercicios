/*5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
--> Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
--> Um ângulo será considerado inválido se não tiver um valor positivo.*/

const angulo1 = 90;
const angulo2 = -30;
const angulo3 = -10;

if(angulo1 + angulo2 + angulo3 === 180 && angulo1 + angulo2 + angulo3 > 0){
    console.log(true)
}
else if (angulo1 + angulo2 + angulo3 !== 180 && angulo1 + angulo2 + angulo3 > 0){
    console.log(false)
}
else {
    console.log("Erro, ângulo inválido!")
}