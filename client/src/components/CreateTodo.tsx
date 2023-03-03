import React, {useState} from 'react';

interface IProps {
    ServerUri: String
}

const CreateTodo: React.FC<IProps> = ({ServerUri})=>{
    const [form, setForm] = useState({title: '', description: ''})
    const onChange =(e:any)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    return (
        <div className='create-todo'>
            <form action={`${ServerUri+"/createTodo"}`} method="post">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" value={form.title} onChange={onChange} />

                <label htmlFor="description">Description: </label>
                <input type="text" name="description" value={form.description} onChange={onChange} />
                
                <button type="submit">Ekle</button>
                
            </form>
        </div>
    )
}

export default CreateTodo