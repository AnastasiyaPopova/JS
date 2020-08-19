//1

'use strict';
let user = {
    name: 'Джон',
    go: function() {
        alert(this.name);
    }
};// если пропустить ';', то получается, что user еще не определен, и поэтому user.go() не сможет отработать

user.go();

//2

'use strict';
let obj, method;

obj = {
    go: function() {
        alert(this);
    }
};

obj.go();// отработает и выведет [object Object], т.к. это обычный вызов метода через точку
(obj.go)(); // отработает и выведет [object Object], т.к. скобки это всего лишь группировка и (obj.go)() == obj.go() 
(method = obj.go)(); // выведет undefined, (правильная запись это method = obj.go; method())
(obj.go || obj.stop)(); // выведет undefined, если это не вызов метода, любая другая операция превращает значение в обычное


//3

'use strict';
function makeUser() {
    return {
      name: "Джон",
      ref(){
        return  this;
      } 
    };
  };
  
  let user = makeUser();
  
  alert( user.ref().name );


//4

'use stirct';
let calculator = {
   read(){
       this.a = +prompt('Введите значение a', 0);
       this.b = +prompt('Введите значение b', 0);
   },

   sum() {
       return this.a + this.b;
   },

   mul() {
       return this.a * this.b;
   }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


//5

'use strict';
let ladder = {
    step: 0,

    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },

    showStep() {
        console.log(this.step);
        return this.step;
    }
};

ladder.up().up().down().showStep();