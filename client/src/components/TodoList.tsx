import React, {useEffect, useState} from 'react';
import axios from 'axios';
interface TodoRegular{
    title: string,
    description: string
}
const TodoList: React.FC = ()=>{
    const [todos, setTodos] = useState<TodoRegular[]>([]);
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
            {todos.map((todo, index)=>(<div><li key={index}>{todo.title}</li><form action="http://localhost:80/deleteTodo" method='post'><input type="hidden" name='title' value={todo.title} /><button type='submit'>Sil</button></form></div>))}
            </ul>
        </div>
    )
}

export default TodoList