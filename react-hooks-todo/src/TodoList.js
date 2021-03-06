import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



const TodoList = ({ todos, deleteTodo, updateTodo }) => (
  <List>
    {todos.map((todo, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox 
          tabIndex={-1} 
          color="primary"
          onChange={() => {updateTodo(index);}}
        > 
        </Checkbox>
        <ListItemText className={todo.value ? "strikethrough" : ""}>
          {todo.text}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Удалить"
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TodoList;