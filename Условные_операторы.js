//trelloTasks

//Task1

let test = confirm('Переменная test равна true?');
if(test == true){
    console.log('Верно');
} else {
    console.log('Неверно');
}

//РЕШЕНИЕ ЗАДАЧИ ЧЕРЕЗ ТЕРНАРНЫЙ ОПЕРАТОР

let test = confirm('Переменная test равна true?');
(test == true) ? console.log('Верно') : console.log('Неверно');

//Task2

let test = confirm('Переменная test не равна true?');
if(test != true) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//РЕШЕНИЕ ЗАДАЧИ ЧЕРЕЗ ТЕРНАРНЫЙ ОПЕРАТОР

let test = confirm('Переменная test не равна true?');
(test != true) ? console.log('Верно') : console.log('Неверно');

//learnJavaScriptTasks

//Task1
 
if('0') {
    alert('Привет'); //любая непустая строка - true, поэтому alert cработает
}

//Task2
'use strict';
let name = prompt('Какое официальное название JavaScript?','');

if(name == 'ECMAScript') {
    console.log('Верно!');
} else {
    console.log('Не знаете? ECMAScript!');
}

//Task3
'use strict';
let num = +prompt('Введите число', '');
if(num > 0){
    alert(1);
} else if(num < 0) {
    alert(-1);
} else{
    alert(0);
}

//Task4

result = (a + b < 4) ? 'Мало' : 'Много';

//Task5

message = (login == 'Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' : '';



