import React, { useState } from 'react';

interface TodoProps{
    title: string,
    description: string
}
interface IProps {
    ServerUri: String;
    Todos: TodoProps[];
}

const EditTodo: React.FC<IProps> = ({ServerUri, Todos})=>{
    const [edit, setEdit] = useState('');
    const onEditChange =(event: React.ChangeEvent<HTMLInputElement>):void=>{
        setEdit(event.target.value);
    }
    return (
        <div className='todos'>
            <ul>
            {Todos.map((todo, index)=>(
                <div>
                    <li key={index}>{todo.title} {todo.description} </li>                    
                    <form action={`${ServerUri+"/editTodo"}`} method='post'>
                        <input type="text" name='editTitle' value={edit} placeholder={todo.title} onChange={onEditChange} />
                        <button type='submit'>Gönder</button>
                    </form>
                    

                </div>
            ))}
            </ul>
        </div>
    )
}

export default EditTodo