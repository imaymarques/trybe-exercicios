function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
// 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>
  
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheWeek() {

    let addTag = document.getElementById('days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let days = dezDaysList[index];
        let daysOfMonth = document.createElement('li');

        if (days === 24 || days === 31) {
            daysOfMonth.className = 'day holiday';
            daysOfMonth.innerHTML = days;
            addTag.appendChild(daysOfMonth);
        } else if (days === 4 || days === 11 || days === 18) {
            daysOfMonth.className = 'day friday';
            daysOfMonth.innerHTML = days;
            addTag.appendChild(daysOfMonth);
        } else if (days === 25) {
            daysOfMonth.className = 'day holiday friday';
            daysOfMonth.innerHTML = days;
            addTag.appendChild(daysOfMonth);
        } else {
            daysOfMonth.className = 'day';
            daysOfMonth.innerHTML = days;
            addTag.appendChild(daysOfMonth);
        }
    }
}
createDaysOfTheWeek();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday".
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

function holiday(buttonName) {
    let getClass = document.getElementsByClassName('buttons-container');
    let button = document.createElement('button');
    
}