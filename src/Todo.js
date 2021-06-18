import React, { useState } from "react";

const Todo = ({ id, todo, complete, allData, sendData }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editInputValue, setEditInputValue] = useState(todo);
  const deleteTodo = () => {
    const filteredData = allData.filter((item) => item.id !== id);

    sendData(filteredData);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleEditInputValue = (e) => {
    setEditInputValue(e.target.value);
  };

  const editTodo = () => {
    const editedData = {
      id: id,
      todo: editInputValue,
      complete: complete,
    };

    const newData = allData.map((item) =>
      item.id === editedData.id ? editedData : item
    );
    sendData(newData);
    toggleEditMode();
  };
  return (
    <div className={isEditMode ? "todo-container edit-mode" : "todo-container"}>
      {isEditMode ? (
        <input
          type="text"
          value={editInputValue}
          onChange={handleEditInputValue}
        />
      ) : (
        <h4 className="todo">
          {id} {todo}
        </h4>
      )}

      <p className={complete ? "complete" : "not-complete"}>
        {complete ? "complete" : "not-complete"}
      </p>
      <div className="todo-menu">
        <button className="todo-delete" onClick={deleteTodo}>
          delete
        </button>
        {isEditMode ? (
          <button className="done" onClick={editTodo}>
            done
          </button>
        ) : (
          <button className="todo-edit" onClick={toggleEditMode}>
            edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
