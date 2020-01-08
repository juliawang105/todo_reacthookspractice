import React from 'react';
import{ useState } from 'react'
import Todo from './todo'
import logo from './logo.svg';
import './App.css';

function App() {
  //todos is what we name our state and setTodos is what we use to set the state 
  //array destructuring 
  const [todos, setTodos] = useState([ 
    {text: "Learn About React"},
    {text: "Meet friend for lunch"},
    {text: "Build really cool todo app"}
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
     </div>
    </div>
  );
}

export default App;
