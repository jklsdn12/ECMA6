const x = 1;

function foo(){
    const x = 10;

    bar();
}

function bar(){
    console.log(x);
}

foo();
bar();


//
function outerFunc(){
    const x = 10;
    const inner = function() {console.log(x);};
    return inner;
}
outerFunc(); //return
const innerFunc = outerFunc();
innerFunc();

//
console.log('======Counter');
const counter = (function() {
   let num  = 0;

   return {
       increase() {
            return ++num;
       },
       decrease() {
           return --num;
       }

   };
}());

console.log(counter.increase());
console.log(counter.decrease());

console.log('=======exam1')

function makeCounter(aux){
    let counter = 0;

    return function(){
      counter = aux(counter);
      return counter;
    };
}

function increase(n){
    return ++n;
}

function decrease(n){
    return --n;
}

const increaser  = makeCounter(increase);
const decreaser  = makeCounter(decrease);

console.log(increaser());
console.log(decreaser());
console.log(increaser());
console.log(decreaser());


console.log('=======exam2');

const counter2 = (function() {
    let counter = 0;

    return function(aux){
        counter = aux(counter);
        return counter; //counter를 return함으로써 aux를 두번 정의하지 않는다.실행을 global에서 두번하는게 아니라 counter내부 계산된거 리턴
    };
}());

const increaser2  = counter2(increase);
const decreaser2  = counter2(decrease);

console.log(increaser2);
console.log(decreaser2);
console.log(increaser2);
console.log(decreaser2);


console.log('====prototype');

// function Person(name, age){
//     this,name = name;
//     let _age = age;
// }


// protoType에서 지역변수 참조 불가능
//const person = new Person('test',11);
//person.prototype.sayHi = function() {
//    console.log(`HI ${this.name} - ${_age}`);
//};
//person.sayHi();

const Person = (function(){
    let _age = 0;

    function Person(name,age){
        this.name = name ;
        _age = age;
    }

    Person.prototype.sayHi = function(){
        console.log(`HI ${this.name} - ${_age}`);
    }
    return Person;
}());

debugger;
const me = new Person('test',1);
me.sayHi();