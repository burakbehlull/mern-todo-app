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
        <>
            <ul>
            {todos.map((todo, index)=>(<li key={index}>{todo.title}</li>))}
            </ul>
        </>
    )
}

export default TodoList