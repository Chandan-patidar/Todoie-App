import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/Todoltem";


import './style.css';
import { Button } from "./components/Button"


const App = () => {
  return (
    <div className="todo-container">
      <Header/>
      <TodoItem text="Eat"/>
      <TodoItem completed={true} text="Code"/>
      <TodoItem text="play"/>
      <TodoItem text="Studey"/>
      <TodoItem text="Sleep Again"/>
      <Button/>
    </div>
    
  );

  
};

export default App;
