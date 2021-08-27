import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        
        // Avoids empty strings or megaspaces to be added to the list

        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)

    }

    const completeTodo = id => {
        
        let updatedTodos = todos.map(todo => {
            
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }

            return todo;

        })

        setTodos(updatedTodos);

    }

    return (

        <div>

            <h1>Hey Lucio! What do you need to do today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
                todos={todos}
                completeTodo={completeTodo}
            />
        </div>
    )
}

export default TodoList