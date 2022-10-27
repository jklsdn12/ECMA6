const mySymbol = Symbol();

console.log(typeof mySymbol);

const mySymbol2 = Symbol('TEST');
console.log(mySymbol == mySymbol2);
console.log(mySymbol2);

const s1 = Symbol.for('test2');

console.log(s1);

Symbol.keyFor(s1);

const Direction = {
    UP:1,
    DOWN:2,
    LEFT:3,
    RIGTH:4
};

const myDirection = Direction.UP;


Array.prototype[Symbol.for('sum')] = function (){
    return this.reduce((acc,cur)=> acc+cur , 0 );
}
console.log([5,2][Symbol.for('sum')]());



const iterable = {
  [Symbol.iterator](){
      let cur = 1;
      const max = 5;
      return {
          next() {
              return {value: cur++, done: cur > max +1};
          }
      };
  }
};

for(const num of iterable){ //
    console.log(num);
}

for(const num of [1,2,3]){
    console.log(num);
}


const obj = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 3,
    length : 4
};

const arr = Array.from(obj);
console.log(arr);

for(const num of arr){
    console.log(num);
}


const fibo = function(max){
    return {
        [Symbol.iterator]() {
            let [pre, cur] = [0, 1];
            return {
                next() {
                    [pre, cur] = [cur, pre + cur];
                    return {value: cur, done: cur >= max};
                }
            };
        }
    };
}
for (const num of fibo(10)){
    console.log(num);
}
