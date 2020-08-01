//1
let a = 1, b = 1;
let c = ++a;
let d = b++;

console.log(++a); //c = 2 (т.к. это префиксная форма - увеличиваем) 
console.log(b++); //d = 1 (т.к. это постфиксная форма - старое значение)
console.log(a);//a = 2
console.log(b)//b = 2

//2
let a = 2;
let x = 1 + (a *=2);// x = 5; т.к. x = 1 + 4; a = 4, т.к. a = 2 * 2
