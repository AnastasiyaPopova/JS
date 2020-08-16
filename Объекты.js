//learnJavaScript

//1
'use strict';
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;


//2

'use strict';
let schedule = {};
schedule["8:30"] = "get up";
let isEmpty = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true;
};

alert(isEmpty(schedule));


//3

'use strict';
const user = {
    name: 'John'
};

user.name = 'Pete';

console.log(user);//сработает, т.к. const относится к самой переменной, а не к ее значениям


//4

'use strict';
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let key in salaries){
    sum += salaries[key];
}

console.log(sum);


//5

'use strict';
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

let multiplyNumeric = (obj) => {
    for (let key in obj) {
        if(typeof(obj[key]) == 'number'){
            obj[key] *= 2;
        }
    }
};

multiplyNumeric(menu);

console.log(menu);


//TRELLO

//1

'use strict';
let obj = {
    a: 1,
    b: 2,
    c: 3
}

console.log(obj.c);
console.log(obj['c']);


//2

'use stirct';
let obj = {
    Коля: '1000',
    Вася: '500',
    Петя: '200'
};

console.log(obj['Петя']);
console.log(obj['Коля']);

//3, 4

'use stirct';
let obj = {
    1 : 'понедельник',
    2 : 'вторник',
    3 : 'среда',
    4 : 'четверг',
    5 : 'пятница',
    6 : 'суббота',
    7 : 'воскресенье',
};

console.log(obj['7']);//3

let day = obj['7'];
console.log(day);//4


