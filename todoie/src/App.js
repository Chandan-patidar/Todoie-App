import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/Todoltem";
import {Button }from "./components/Button";

import './style.css';
import CounterComponent from "./components/CounterComponet";




const App = () => {
  return (
    <div className="todo-container">
      <CounterComponent/>
      <Header title="Todoie App"/>
      <TodoItem text="Eat"/>
      <TodoItem text="Code"/>
      <TodoItem text="play"/>
      <TodoItem text="Studey"/>
      <TodoItem text="Sleep Again"/>
      <Button/>
    </div>
    
  );

  
};

export default App;
