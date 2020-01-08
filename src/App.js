import React from 'react';
import{ useState } from 'react';
import Todo from './todo';
import TodoForm from './todo_form'
import logo from './logo.svg';
import './App.css';

function App() {
  //todos is what we name our state and setTodos is what we use to set the state 
  //array destructuring 
  const [todos, setTodos] = useState([
    { text: "Learn About React", isCompleted: false },
    { text: "Meet friend for lunch", isCompleted: false },
    { text: "Build really cool todo app", isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos); //sets the state 
  }

  return (
    <div className="App">
     <div className="todo-list">
       {todos.map((todo, index) => (
         <Todo 
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
         />
       ))}
       <TodoForm addTodo = {addTodo}/>
     </div>
    </div>
  );
}

export default App;
