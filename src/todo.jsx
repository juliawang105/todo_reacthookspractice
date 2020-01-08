import React from 'react';

const Todo = ({todo, index, completeTodo, removeTodo}) => <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} 
  className="todo">{todo.text}
  <div>
    <button onClick={ () => completeTodo(index)}>Complete</button>
    <button onClick={ () => removeTodo(index)}>X</button>
  </div>
</div>

export default Todo;

