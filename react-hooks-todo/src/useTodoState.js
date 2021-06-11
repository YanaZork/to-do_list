import { useState } from 'react';
export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, { text: todoText, value: false }]);
    },

    deleteTodo: todoIndex => {
      const newTodos = todos
        .filter((_, index) => index !== todoIndex);

      setTodos(newTodos);
    },

    updateTodo: index => {
      (todos[index] != undefined) ? todos[index].value = !todos[index].value : console.log("Error");
      setTodos(todos);
    }


  };
};