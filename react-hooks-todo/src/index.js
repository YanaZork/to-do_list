import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import './styles.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import 'fontsource-roboto';

const App = () => {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodoState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        To-do Лист
      </Typography>

      <TodoForm 
        saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
