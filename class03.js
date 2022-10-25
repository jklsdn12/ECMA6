class Person {
  name = 'test'; //nodejs v12.0 이상
    constructor(name) {
        this.name= name;
    }

    getName = function(){
        console.log(this.name);
    }

}

const me = new Person('testnew');
me.getName();



class Animal {
    constructor(age,weight) {
        this.age = age;
        this.weight = weight;
    }

    eat() { return 'eat'; }

    move() { return 'move'; }

}

class Bird extends Animal {
    fly() { return `fly`; }

    info() { return `${this.fly()} ${this.age} ${this.weight} ${this.eat()}`}
}

const bird = new Bird(1,2);

console.log(bird);
console.log(bird.info());


console.log('########### 동적 상속');

function Base1(){}
class Base2{}
let condition = true;

class Derived extends (condition ? Base1 : Base2){}

const dervied = new Derived();
console.log(dervied);
console.log(dervied instanceof Base1);
console.log(dervied instanceof Base2);

const test = new Base2();  //암묵적 construct 생성


class SuperClass{

    a = '1';
}

class TestSuper extends  SuperClass{
    constructor() { //상속받은 class에서 생성자를 만들시 super생략이 불가능하다.
        super();
        this.a =2; // super전 호출 불가
    }
}

const testSuper = new TestSuper();


class SuperProto{
    constructor(name) {
        this.name = name
    }

    sayHi(){
        return `HI ${this.name}`;
    }
}

class TestSuperProto extends SuperProto {
    sayHi(){
        const __super = Object.getPrototypeOf(TestSuperProto.prototype);
        return `${__super.sayHi.call(this)} test`;
    }
}

const testProto = new TestSuperProto('super');
console.log(testProto.sayHi());


const testBase = {
    name : 'testBase',
    sayHi(){
        testAjax(this.name)
        return `HI ${this.name}`;

    }

};



const testAjax = function(name){ //proto type 으로 받을 수 없으나 function 안에 proto를 가지고 있다.  v8엔진 동작상 재귀로 동작 <= 공부 더 할것
    console.log(`ajax ${name}`);
}

const testBaseRun = {
    __proto__ : testBase,

    sayHi(){
        return `${super.sayHi()}`;
    }
};

console.log(testBaseRun.sayHi());



class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }

    toString(){
        return `width ${this.width}, height ${this.height}`;
    }
}

class ColorRectangle extends Rectangle{
    color = 'test'; //this.color constructor 전에 생김
    constructor(width,height,color) { // EMCA6최신 function(color = 'blue') 로 가능
        super(width,height);
        this.color = color; // 오버라이딩 ECMA5 생성자 외부 클래스 변수 선언에 경우 construct 전에 인스턴스 되고 constructor에 같은 변수가 있으면 오버라이드 된다.ㄴ
    }
    toString() {
        return super.toString() + ` color ${this.color}`;
    }
}

const rectangle = new ColorRectangle(1,2,'blue');
console.log(rectangle);

console.log(rectangle.toString());
console.log(rectangle.getArea());



/////////////