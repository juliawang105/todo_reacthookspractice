import React from 'react';
import { useState } from 'react';

function TodoForm({addTodo}){
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return; //if nothing is in the input box and the user presses "enter"
    addTodo(value);
    setValue("");
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add a new Todo"
        onChange={e => setValue(e.target.value)}
      />

    </form>
  )
};

export default TodoForm;