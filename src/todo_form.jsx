// import React from 'react';
// import { useState } from 'react';

// function TodoForm({addTodo}){
//   const [value, setValue] = useState("");

//   const addTodo = text => {
//     const newTodos = [...todos, {text}];
//     setTodos(newTodos)
//   }

//   const handleSubmit = e => {
//     e.preventDefault();
//     if(!value) return; //if nothing is in the input box and the user presses "enter"
//     addTodo(value);
//     setValue("");
//   }

//   return(
//     <form onSubmit={handleSubmit}>
//       <input 
//         type="text"
//         className="input"
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       />

//     </form>
//   )
// };

// // export default TodoForm;