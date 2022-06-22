/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */

const gerarEmpregados = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, email: `${email}@betrybe.com`};
}

const newEmployees = (name) => {
    const employees = {
      id1: gerarEmpregados('Pedro Guerra'),
      id2: gerarEmpregados('Luiza Drumond'),
      id3: gerarEmpregados('Carla Paiva'),
    }
    return employees;
  };

  console.log(newEmployees(gerarEmpregados));

/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const randomNumber = (num, sorteio) => {
    const number = Math.floor(Math.random() * 6);
    console.log('O número sorteado foi: ', number);
    return sorteio(number, num);
}

const checkNumber = (number, choosen) => {
    if (number === choosen) {
        return 'Parabéns você ganhou!';
    } else {
        return 'Tente novamente!';
    }
}

console.log(randomNumber(2, checkNumber));