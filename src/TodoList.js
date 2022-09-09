import React from "react";

const TodoList = ({ todos, deleteHandler }) => {
  return (
    <div>
      <section className="container">
        {todos.map((todo, index) => (
          <div key={index} className="todo_list">
            <h2 className="item1">{todo} </h2>
            <button className="item2" onClick={() => deleteHandler(index)}>
              Delete
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TodoList;
