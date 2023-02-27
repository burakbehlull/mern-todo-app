import React from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import 'App.scss';

function App() {
  return (
    <div className='App'>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default App;
