import React from 'react';
import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import '../App.css';


const Main = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <header>
        <h1>Blessed</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default Main;
