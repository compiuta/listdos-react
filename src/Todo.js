import React from "react";

const Todo = ({ id, todo, complete, allData, sendData }) => {
  const deleteTodo = () => {
    const filteredData = allData.filter((item) => item.id !== id);

    sendData(filteredData);
  };
  return (
    <div className="todo-container">
      <h4 className="todo">
        {id} {todo}
      </h4>
      <p className={complete ? "complete" : "not-complete"}>
        {complete ? "complete" : "not-complete"}
      </p>
      <div className="todo-menu">
        <button className="todo-delete" onClick={deleteTodo}>
          delete
        </button>
        <button className="todo-edit">edit</button>
      </div>
    </div>
  );
};

export default Todo;
