class Test {
    constructor() {
        //this == 인스턴스된 메모리에 첫 위치( stack의 첫위치)
        this.name = 'testClass';

        Test.plusPoint++;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    display(){
        console.log(this.name);
    }

    static getPlusPoint(){
        return Test.plusPoint;
    }
}

Test.plusPoint = 0;
let test = new Test();

console.log(test.name + "/"+test.getName() + "/" );
test.display()
console.log(Test.getPlusPoint());

test = new Test("Test2");
console.log(test.name);
console.log(Test.getPlusPoint());



class TestEx extends Test{
    constructor() {
        super();
    }
    toString(){
        return "toString";
    }
}

let testEx = new TestEx();

testEx.setName("TestEx");

console.log(testEx.getName());

testEx.display();

console.log(testEx.toString());

console.log(test.toString()); // object 내장객체 run 부모 클래스의 메서드는 재정의 되지 않는다.



const arr1 =[1,2,3,4,5];
const arr2 =[...arr1,6,7,8];

console.log(arr1);
console.log(arr2);

const arr3 = [3,4,5];
const arr4 = [1,2,3,...arr3,6,7,8];
console.log(arr4);


function myPrint(a,b,c,d,e){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}

myPrint(...arr4);

const arr5 = [..."XYZ"];
myPrint(...arr5);
console.log(arr5);

console.log(Math.max(...arr4));


const nameTest = "name";
const nameTest2 = "age";

const namingObj = {
    nameTest : "Test",
    nameTest2 : 23
}


console.log(namingObj);

const namingObj2 = {
    [nameTest] : "Test",
    [nameTest2] : 23
}


console.log(namingObj2);


let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Hello");
         resolve();
        reject('에러..');

        // new Array(-1);
    },2000)

}).then(() =>{
    console.log("World");
}).then(()=>{
    console.log("eeeee");
}).catch((error) =>{
    console.log(error+ "Error");
}).finally(()=>{
    console.log("finally");
});