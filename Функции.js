//Task1 

//1 

function checkAge(age){
return (age > 18) ? true : confirm('Родители разрешили?');
}

//2

function checkAge(age){
    return (age > 18) || confirm('Родители разрешили?');
}

//Task2

'use strict';
function min(a, b) {
    if(a < b){
        return a;
    } else {
        return b;
    }
}

console.log(`min(2, 5) + == + ${min(2, 5)}`);
console.log(`min(3, -1) + == + ${min(3, -1)}`);
console.log(`min(1, 1) + == + ${min(1, 1)}`);

//Task3

'use strict';
let x = +prompt('Введите число', '');
let n = +prompt('Введите степень', '');

function pow(x, n){
    let res = 1;
    for (let i = 0; i < n; i++){
        res *= x;
    }
    return res;
}

if(n < 1) {
    console.log(`Степень ${n} не является натуральным значением`);
} else {
    console.log(pow(x,n));
}

//ФУНКЦИИ СТРЕЛКИ


//Task1

'use strict';
let ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
};

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );