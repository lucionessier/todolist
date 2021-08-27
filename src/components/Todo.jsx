import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleFill , RiEdit2Line } from 'react-icons/ri';

function Todo({todos,completeTodo}) {

    const [edit, setEdit] = useState({
        id:null,
        value:''
    })

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>

                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>

                <div className="icons">
                    <RiCloseCircleFill/>
                    <RiEdit2Line/>

                </div>

        </div>
    ))
}

export default Todo
