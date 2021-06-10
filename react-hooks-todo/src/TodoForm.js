import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import 'fontsource-roboto';

const TodoForm = ({ saveTodo }) => {
    const { value, reset, onChange } = useInputState('');

    return (
    <form 
        onSubmit={event => {
            event.preventDefault();
            saveTodo(value);
            reset();
        }}
    >
        <TextField
            variant="outlined"
            placeholder="Добавить запись"
            margin="normal" 
            onChange={onChange}
            value={value}
        />
    </form>
  );
};

export default TodoForm;