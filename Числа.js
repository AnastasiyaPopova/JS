//learnJavaScript


//task1

'use strict';
let a = +prompt('Введите первое число', 0);
let b = +prompt('Введите второе число', 0);

let sum = a + b;

console.log(sum);


//task2

'use strict';
let num = 6.35;

console.log(Math.round(num * 10) / 10);


//task3

'use strict';
function readNumber() {
    let num;
    do {
        num = prompt('Введите число', 0);
    } while(!isFinite(num));

    if (num == null || num == ''){
        return null;
    }

    return +num;
}

console.log(readNumber());


//task4 

'use strict';
function random (min, max) {
    return Math.random() * (max - min) + min;
}
console.log(random(1,5));
console.log(random(1,5));
console.log(random(1,5));


//task5

'use strict';
function randomInteger(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));


//trelloTasks


//task1

'use strict';
let num = 3;

console.log(num);


//task2

'use strict';
let a = 10,
    b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


//task3

'use strict';
let c = 15,
    d = 2;

let result = c + d;

console.log(result);


//task4

'use strict';
let a = 17,
    b = 2,
    c = 5;

console.log(a + b + c);


//task5

'use strict';
let a = 17,
    b = 10;

let c = a - b;
let d = 7;

let result = c + d;

console.log(result);
