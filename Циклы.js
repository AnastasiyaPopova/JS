//trelloTasks

//1(while)

let i = 1;
while(i < 100){
    console.log(i);
    i++;
}

//(for)

for(let i = 1; i < 100; i++){
    console.log(i);
}

//2(while)

let i = 11;
while(i < 33){
    console.log(i);
    i++;
}

//(for)

for(let i = 11; i < 33; i++){
    console.log(i);
}

//3(while)

let i = 0;

while(i < 100){
    if(i % 2 == 0){
        console.log(i);
    }
    i++;
}

//(for)

for(let i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

//4(while)

let i = 1;
let sum = 0;
while(i < 100){
    sum += i;
    i++;
}
console.log(sum);

//(for)

let i = 1;
let sum = 0;
for(i; i < 100; i++){
    sum += i;
}
console.log(sum);


//learnJavaScriptTasks

//1

let i = 3;

while(i) {
    alert(i--); //будет выполняться до того момента, когда i = 0(т.к. 0 это false)
}

//2

let i = 0;
while (++i < 5) alert(i); //1,2,3,4, т.к. когда i = 4, ++i станет 5, а 5<5 - false

///////

let i = 0;
while (i++ < 5) alert(i); //1,2,3,4,5

//3

for (let i = 0; i < 5; i++) alert( i );
//= , 0,1,2,3,4
for (let i = 0; i < 5; ++i) alert( i );

//4

for (let i = 2; i < 10; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

//5

let i = 0;

while(i < 3){
    console.log(i);
    i++;
}

//6

let num;

do{
    num = +prompt('Введите число, большее 100', '');
} while(num <= 100 && num); // num = false, в случае, если у нас '', undefined, null и т.д., этот способ выходит из цикла


//7

natNumb:
for(let i = 2; i < 10; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0) continue natNumb;
    }
    console.log(`Натуральное число ${i}`);
}

