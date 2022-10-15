const testObj = {
    str : 'String',
    num: 1234,
    arr : [1,2,3,4]
}

const arr = [1,2,3,4,5]

for(let name of arr){
    console.log(name);
}



let {str : strData , num : numData , arr : arrData, test: testData = 'test'} = testObj;

console.log(strData);
console.log(numData);
console.log(arrData);
console.log(testData);

//obj에 이름과 일치해야 함
let {str,num } = testObj;

console.log(str);
console.log(num);

let map = new Map();
map.set("TEST", '1');
map.set("TEST2", '2');
map.set("TEST3", '3');

var mapKey = map.keys();
for(let key of mapKey){
    console.log(key);
}


var valuIter = map.values();
for (let value of valuIter){
    console.log(value);
}

let setTest = new Set();
console.log(setTest);

setTest = new Set(["Apple","Melon"])

console.log(setTest);
setTest.add("TEst");
console.log(setTest);

let setKeys = setTest.keys();
for (let key of setKeys) {
    console.log(key);
}

let setentry = setTest.entries();
for (let val of setentry) {
    console.log(val);
}

for(let test of setTest){
    console.log(test);
}

setTest.forEach(function(val,val2,map){
   console.log(val+" "+val2);
});
