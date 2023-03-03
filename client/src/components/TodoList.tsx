import React, {useEffect, useState} from 'react';
import axios from 'axios';
interface TodoRegular{
    title: string,
    description: string
}
const TodoList: React.FC = ()=>{
    const [todos, setTodos] = useState<TodoRegular[]>([]);
    const [edit, setEdit] = useState('');
    const onEditChange =(event: React.ChangeEvent<HTMLInputElement>):void=>{
        setEdit(event.target.value);
    }

    useEffect(()=>{
        const getTodos = async()=>{
            const getsTodo = await axios.get('http://localhost:80/getTodos')
           setTodos(getsTodo.data)
        }
        getTodos()
    },[])
    return (
        <div className='todos'>
            <ul>
            {todos.map((todo, index)=>(
            <div>
                <li key={index}>{todo.title} {todo.description} </li>
                <form action="http://localhost:80/deleteTodo" method='post'>
                    <input type="hidden" name='title' value={todo.title} />
                    <button type='submit'>Sil</button></form>
                    
                <form action="http://localhost:80/editTodo" method='post'>
                    <input type="text" name='editTitle' value={edit} placeholder={todo.title} onChange={onEditChange} />
                    <button type='submit'>Gönder</button>
                </form>
            </div>
            ))}
            </ul>
        </div>
    )
}

export default TodoList