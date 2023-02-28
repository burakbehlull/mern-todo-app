import React from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <CreateTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
