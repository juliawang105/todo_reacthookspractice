import React from 'react';
import{ useState } from 'react'
import Todo from './todo'
import logo from './logo.svg';
import './App.css';

function TodoForm({addTodo}){
  const [value, setValue] = useState("");

  // const addTodo = text => {
  //   const newTodos = [...todos, {text}];
  //   setTodos(newTodos)
  // }

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
        onChange={e => setValue(e.target.value)}
      />

    </form>
  )
};

function App() {
  //todos is what we name our state and setTodos is what we use to set the state 
  //array destructuring 
  const [todos, setTodos] = useState([
    { text: "Learn About React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false }
  ]);

  return (
    <div className="App">
     <div className="todo-list">
       {todos.map((todo, index) => (
         <Todo 
          key={index}
          index={index}
          todo={todo}
         />
       ))}
       <TodoForm />
     </div>
    </div>
  );
}

export default App;
