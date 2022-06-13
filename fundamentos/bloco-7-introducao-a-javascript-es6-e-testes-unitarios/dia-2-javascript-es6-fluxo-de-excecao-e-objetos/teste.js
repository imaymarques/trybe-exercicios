const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };

  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };

  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// const addTurno = (objeto, chave, valor) => {
//     objeto[chave] = valor;
// }
// addTurno(lesson2, 'turno', 'noite');
// console.log(lesson2);

// const keysList = (object) => {
//     const list = Object.keys(object);
//     console.log(list);
// }
// keysList(lesson1);

// const objLength = (object) => {
//     const list2 = Object.keys(object).length;
//     console.log(list2);
// }
// objLength(lesson2);

// const objValue = (object) => {
//     const list3 = Object.values(object);
//     console.log(list3);
// }
// objValue(lesson1);

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const numStudants = (object) => {
    let soma = 0;
    const array = Object.keys(object);
    for (let index = 0; index < array.length; index += 1) {
        soma += object[array[index]].numeroEstudantes;
    }
    return soma;
}
console.log(numStudants(allLessons));