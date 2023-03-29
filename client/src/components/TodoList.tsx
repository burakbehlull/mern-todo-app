import React from 'react';

interface TodoProps{
    title: string;
    description: string;
}
interface IProps {
    ServerUri: String;
    Todos: TodoProps[];
}

const TodoList: React.FC<IProps> = ({ServerUri, Todos})=>{

    return (
        <div className='todos'>
            <ul>
            {Todos.map((todo, index)=>(
                <div>
                    
                    <li key={index}>{todo.title} {todo.description}</li>

                    <form action={`${ServerUri+"/deleteTodo"}`} method='post'>
                        <input type="hidden" name='title' value={todo.title} />
                        <button type='submit'>Sil</button>
                    </form> 
                </div>
            ))}
            </ul>
        </div>
    )
}

export default TodoList