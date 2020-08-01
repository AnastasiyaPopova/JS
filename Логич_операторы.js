//trelloTasks

//Task1

'use strict';
let a = +prompt('Введите значение переменной a', '');

if(a > 0 && a < 5) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//Task2

'use strict';
let a = +prompt('Введите значение переменной a', '');

if (a == 0 || a == 2){
    a+=7;
    console.log(a);
} else {
    a/=10;
    console.log(a);
}

//Task3

'use strict';

let a = +prompt('Введите значение переменной a', '');
let b = +prompt('Введите значение переменной b', '');
let sum, dif;
if( a == 1 || a < 1 && b >= 3) {
    sum = a + b;
    console.log(sum);
} else {
    dif = a - b;
    console.log(dif);
}

//Task4

'use strict';
let a = +prompt('Введите значение переменной a', '');
let b = prompt('Введите значение переменной b','');

if(a > 2 && a < 11 || b >=6 && b < 14){
    console.log('Верно');
} else {
    console.log('Неверно');
}

//learnJavaScriptTasks

//Task1

console.log(null || 2 || undefined); //первое истиное значение 2

//Task2

alert(alert(1) || 2 || alert(3)); // 1, 2

//Task3

alert(1 && null && 2);//null

//Task4

alert(alert(1) && alert(2));//1, undefined

//Task5

alert(null || 2 && 3 || 4); //сначала выполняется &&, т.к. стоит выше по приоритету выполнения, первое ложное это 3, получается null || 3 || 4, первое истиное это 3

//Task6

'use strict';
let age = +prompt('Введите число', 14);

if(age >= 14 && age <= 90){
      console.log('Вы нашли переменную в диапазоне между 14 и 90');
} else {
    console.log('Переменная не находится в диапазоне между 14 и 90');
}

//Task7

//1 способ
'use strict';
if(!(age >= 14 && age <= 90)){
    console.log('Переменная не находится в диапазоне между 14 и 19');
} else {
    console.log('Вы нашли переменную в диапазоне между 14 и 19');
}

//2 способ

'use strict';
if(age < 14 || age > 90){
    console.log('Переменная не находится в диапазоне между 14 и 19');
} else {
    console.log('Вы нашли переменную в диапазоне между 14 и 19');
}

//Task8

if( -1 || 0) alert('first'); // выполнится(true||false), т.к. || принимает первое истиное знач., получаем -1
if(-1 && 0) alert('second');//не выполнится(true && false), т.к. первое ложное это 0, а 0 это false
if(null || -1 && 1) alert('third');//выполнится(false||true && true), т.к. по приоритетности выполняется сначала -1 && 1(true && true), все истины, возвращаем последнее true, получаем null || 1 => 1

//Task9

'use strict';
let log = prompt('Введите логин', '');

if (log == 'Админ') {
    let password = prompt('Введите пароль', '');
    if (password == 'Я Главный'){
        alert('Здравствуйте!');
    } else if(password == '' || password == null){
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (log == '' || log == null){
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}