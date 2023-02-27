import React, {useEffect, useState} from 'react';
import axios from 'axios';

const TodoList: React.FC = ()=>{
    const [todos, setTodos] = useState<string[]>([])
    useEffect(()=>{
        const getTodos = async()=>{
            const Todos = await axios.get('http://localhost:80/getTodos')
           setTodos(Todos.data)
        }
        getTodos()
    },[])
    return (
        <>
            <h1>My Todos</h1>
        </>
    )
}

export default TodoList