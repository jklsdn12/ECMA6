function printTodo(todo){
    console.log(`할일 ${todo.content}는 ${todo.completed ? '완료' : '비완료'} 상태입니다.`);
}


const test = {
    content : 'test'
}

printTodo(test);

const test2 = {
    content : 'test2',
    completed : '1'
}

printTodo(test2);