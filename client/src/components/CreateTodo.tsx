import React, {useState} from 'react';

const CreateTodo: React.FC = ()=>{
    const [form, setForm] = useState({title: '', description: ''})
    const onChange =(e:any)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    return (
        <>
            <form action='http://localhost:80/createTodo' method='post'>
                <input type="text" name="title" value={form.title} onChange={onChange} />
                <input type="text" name="description" value={form.description} onChange={onChange} />
                <button type="submit">Ekle</button>
            </form>
        </>
    )
}

export default CreateTodo