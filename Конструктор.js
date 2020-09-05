//learnJavaScript

//task1

'use strict';

let obj = {};

function A() {return obj;}
function B(){return obj;}

console.log(new A() == new B());


//task2

'use stict';

function Calc() {
    this.read = (a, b) => {
        this.a = +prompt('Введите значение а', 0);
        this.b = +prompt('Введите значение b', 0);
    };

    this.sum = (a, b) => {
        return this.a + this.b;
    };

    this.mul = (a, b) => {
        return this.a * this.b;
    };
}

let calculator = new Calc();

calculator.read();

console.log(`sum = ${calculator.sum()}`);
console.log(`mul = ${calculator.mul()}`);


//task3

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = (a, b) => {
        this.value += +prompt('Сколько нужно добавить?', 0);
    };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);