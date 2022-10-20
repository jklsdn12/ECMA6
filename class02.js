class Person{
    constructor(name) {
        this.name = name;
    }

    sayHi(){
        console.log(`HI My name is ${this.name}`);
    }

    static sayHello(){
        console.log('HELLO');
    }
}

const person = new Person('test');
person.sayHi();

Person.sayHello();


Person.prototype.test = function(){
    console.log(`Test = ${this.name}`);  //생성자 메소드는 prototype 메소드
}

const me = new Person("test2");
me.test();



console.log("############## class");

const person2 = {
    firstName : 'test',
    lastName : 'test2',

    get fullName(){
        return this.firstName+' '+this.lastName;
    },
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
};
console.log(person2.fullName);
person2.fullName = 'test test';
console.log(person2.fullName);


console.log("##### make class");

class Person3   {
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return this.firstName+' '+this.lastName;
    }

    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const person4 = new Person3('testpe','last');
console.log(person4.fullName);
person4.fullName = 'test person';
console.log(`${person4.firstName} ${person4.lastName}`);


console.log("### private");

class Person5   {
    #test = 'test';
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        console.log("construct => "+this.#test);
    }

    get fullName(){
        return this.firstName+' '+this.lastName;
    }

    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}

const test5 = new Person5('test','5');
//console.log(test5.#test); //에러