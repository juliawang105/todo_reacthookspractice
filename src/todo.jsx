import React from 'react';

const Todo = ({todo, index, completeTodo}) => <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} 
  className="todo">{todo.text}
  <div>
    <button onClick={ () => completeTodo(index)}>Complete</button>
  </div>
</div>

export default Todo;

