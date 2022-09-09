import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newtodos = [...todos, task];
    setTodos(newtodos);
    setTask(" ");
  };

  const deleteHandler = (indexvalue) => {
    const newtodos = todos.filter((todo, index) => index !== indexvalue);
    setTodos(newtodos);
  };
  return (
    <div className="main">
      <div>
        <h2 className="title">Todo Management Application</h2>
      </div>
      <form onSubmit={submitHandler}>
        <input type="text" name="task" value={task} onChange={changeHandler} />{" "}
        &nbsp; &nbsp;
        <input type="submit" name="Add" value="Add" />
      </form>

      <TodoList todos={todos} deleteHandler={deleteHandler}></TodoList>
    </div>
  );
}

export default App;
