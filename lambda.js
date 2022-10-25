const lambdaTest = x => x*2;
console.log(lambdaTest(2));


const multi = (a,b) => {
    return a*b;
}

console.log(multi(2,4));

const person = (name =>({
    sayName() {
        return `name  = ${name}`;
    }
}))('test');

console.log(person.sayName());


class Prefixer{
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr){
        return arr.map(function(item){
            return this.prefix + item;
        }.bind(this)); //bind 로 this문제 해결
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['tran', 'test']));

class Prefixer2{

    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr){
        return arr.map(item => this.prefix + item); // EMCA6
    }
}

const prefixer2 = new Prefixer2('-webkit-');
console.log(prefixer2.add(['tran', 'test']));


function Rest(param,...ret){
    console.log(param);
    console.log(ret);
}

Rest(1,2,3,4,5,6);


function sum(x,y){
    x = x||1;
    y = y||2;
    console.log(`x ${x} y ${y}`);
}
sum();