//trelloTasks

//1

'use strict';
let num = +prompt('Введите число между 1 и 4', '');
let result;
switch(num) {

    case 1:
        result = 'Зима';
    break;

    case 2:
        result = 'Весна';
    break;

    case 3:
        result = 'Лето';
    break;

    case 4:
        result = 'Осень';
    break;

    default:
        result = 'Вы ввели неверные данные';
}
console.log(result);


//learnJavaScriptTasks

//1

'use strict';
let browser = prompt("Write the browser's name", '');

if(browser == 'Edge') {
    console.log("You've got the Edge!");
} else if(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera'){
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}

//2

'use strict';
let number = +prompt('Введите число между 0 и 3', '');

switch(number) {
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
}

