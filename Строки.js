//learnJavaScript


//task1

'use strict';
function ucFirst(str) {
        if(!str) return str;
    let newStr = str[0].toUpperCase() + str.slice(1);

    return newStr;
  
}

console.log(ucFirst('вася'));


//task2

'use strict';
function checkSpam(str){
   let lowStr = str.toLowerCase();

   return lowStr.includes('viagra') || lowStr.includes('xxx');

}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));


//task3

'use strict';
function truncate(str, maxlength){
    let str1 = str.length;
        let result = '';
        (str1 > maxlength) ? result = str.substring(0, maxlength - 1) + '...' : result = str;
        return result;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));


//task4

'use strict';
function extractCurrencyValue(str){
    let num = '';
    for(let sym of str){
        if(!isNaN(sym)) num += sym;
        
    }
    return +num;
}

console.log(extractCurrencyValue('$120'));


//trelloTasks


//task1

'use strict';
let str = 'Привет, Мир!';

console.log(str);


//task2

'use strict';
let str1 = 'Привет, ';
let str2 = 'Мир!';

console.log(str1 + str2);


//task3

'use strict';
let name = 'Anastasiya';

console.log(`Привет, ${name}!`);


//task4

'use strict';
let age = 21;

console.log(`Мне ${age} лет!`);
