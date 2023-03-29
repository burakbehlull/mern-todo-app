import React, {useState} from 'react';
import axios from 'axios'

interface IProps {
    ServerUri: String
}

const CreateTodo: React.FC<IProps> = ({ServerUri})=>{
    const [form, setForm] = useState({title: '', description: ''})
    const onChange =(e:any)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    const formSubmit = () => {
        axios.post(`${ServerUri+"/createTodo"}`, form)
    }
    return (
        <div className='create-todo'>
            <form onSubmit={formSubmit}>
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