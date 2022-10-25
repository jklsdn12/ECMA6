const arr = [1,2];
arr[arr.length] = 3;
console.log(arr);

console.log(arr.pop());


const Stack =(function(){
    function Stack(array = []){
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not array`);
        }
        this.array = array;
    }

    Stack.prototype = {
        constructor : Stack,

        push(value){
            return this.array.push(value);
        },
        pop(){
            return this.array.pop();
        },
        entries(){
            return [...this.array];
        }
    };

    return Stack;
}());

const stack = new Stack([1,2]);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());

stack.pop()
console.log(stack.entries());



const Queue  = (function(){
    function Queue(array=[]){
        if(!Array.isArray(array)){
            throw new TypeError(`${array} is not Array`);
        }
        this.array = array;
    }

    Queue.prototype = {
        constructor: Queue,

        enqueue(value){
            return this.array.push(value);
        },
        dequeue(){
            return this.array.shift();
        },
        entries() {
            return [...this.array];
        }
    }
    return Queue;
}());

const queue = new Queue([1,2]);
console.log(queue.entries());
queue.enqueue(3);
console.log(queue.entries());
queue.dequeue()
console.log(queue.entries());


const todos = [
{id : 1 , content : 'test'},
{id : 3 , content : 'test3'},
    {id : 2 , content : 'test2'}
];

function compare(key){
    return (a,b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 :0));
}

todos.sort(compare('id'));
console.log(todos);