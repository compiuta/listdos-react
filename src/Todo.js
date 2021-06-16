import React from "react";

const Todo = ({ id, todo, complete }) => {
  return (
    <div className="todo-container">
      <h4 className="todo">
        {id} {todo}
      </h4>
      <p className={complete ? "complete" : "not-complete"}>
        {complete ? "complete" : "not-complete"}
      </p>
    </div>
  );
};

export default Todo;
