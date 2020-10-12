///trelloTasks

//task1
'use strict';

let arr = ['a', 'b', 'c'];

alert(arr);


//task2

'use strict';

let arr = ['a', 'b', 'c'];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


//task3

'use strict';
let arr = ['a', 'b', 'c', 'd'];

console.log(`${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`);

//task4

'use strict';

let arr = [2, 5, 3, 9];

let mul1 = arr[0] * arr[1];
let mul2 = arr[2] * arr[3];

let result = mul1 + mul2;

console.log(result);


//learnJavaScript

//task1

'use strict';

let  fruits = ['Яблоки', 'Груша', 'Апельсин'];

let shoppingCart = fruits;
shoppingCart.push('Банан');

alert(fruits.length); //4


//task2

'use strict'; 

let styles = ['Джаз', 'Блюз'];

console.log(styles);

styles.push('Рок-н-ролл');

console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = 'Классика';

console.log(styles);

styles.shift();

styles.unshift('Рэп', 'Рэгги');

console.log(styles);

//task3

let arr = ['a', 'b'];

arr.pusj(funciton() {
    alert(this);
});

arr[2](); // "a","b",function

//task4

'use strict';

function sumInput() {
        let numbers = [];
        while(true) {
                let value = prompt('Введите значения');
                if (value === '' || value === null || !isFinite(value)) break;
                numbers.push(+value);
        };

        let sum = 0;

        for(let number of numbers) {
                sum += number;

        }
        return sum;
}

console.log(sumInput());

//task5

'use strict';

function getMaxSubSum(arr) {
    let maxSum = 0;
    
    for(let i = 0; i < arr.length; i++) {
            let sumFixedStart = 0;
            for(let j = i; j < arr.length; j++) {
                    sumFixedStart += arr[j];
                    maxSum = Math.max(maxSum, sumFixedStart);
            }
    }

    return maxSum;
}

    console.log(getMaxSubSum([-1, 2, 3, -9]));
    console.log(getMaxSubSum([2, -1, 2, 3, -9]));
    console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
    console.log(getMaxSubSum([-2, -1, 1, 2]));
    console.log(getMaxSubSum([100, -9, 2, -3, 5]));
    console.log(getMaxSubSum([1, 2, 3]));



