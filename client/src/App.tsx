import {useEffect, useState} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import axios from 'axios';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';
import NotFound from './components/NotFound';
import './App.scss';

const serverURL = 'http://localhost:80';

interface TodoRegular{
  title: string,
  description: string
}

function App() { 

  const [todos, setTodos] = useState<TodoRegular[]>([]);

  useEffect(()=>{
    const getTodos = async()=>{
        const getsTodo = await axios.get(serverURL+'/getTodos')
       setTodos(getsTodo.data)
    }
    getTodos()
  },[])

  return (
    <div className='App'>
      <div className='container'>
        <ul>
          <li><Link to='/'>Todos</Link></li>
          <li><Link to='/edit'>Düzenle</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' render={props=>(
            <>
              <CreateTodo ServerUri={serverURL} />
              <TodoList ServerUri={serverURL} Todos={todos} />
            </>
          )}/>
          <Route path='/edit' render={props=>(
            
            <>
              <EditTodo {...props} ServerUri={serverURL} Todos={todos}  />
            </>
            )} />
          <Route component={NotFound}></Route>
        </Switch>
      </div>


    </div>

  );
}

export default App;
