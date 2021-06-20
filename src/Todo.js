import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";

const Todo = ({ id, todo, complete, allData, sendData }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editInputValue, setEditInputValue] = useState(todo);
  const [isComplete, setIsComeplete] = useState(complete);
  const getEditedData = () => {
    const editedData = {
      id: id,
      todo: editInputValue,
      complete: isComplete,
    };

    const newData = allData.map((item) =>
      item.id === editedData.id ? editedData : item
    );

    return newData;
  };

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

  const completeTodo = () => {
    setIsComeplete(!isComplete);
  };

  const editTodo = () => {
    const newData = getEditedData();
    sendData(newData);
    toggleEditMode();
  };

  useEffect(() => {
    if (isComplete !== complete) {
      const newData = getEditedData();
      sendData(newData);
    }
  }, [isComplete]);
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
          <input
            type="checkbox"
            onClick={completeTodo}
            defaultChecked={isComplete ? "checked" : null}
          />
          {todo}
        </h4>
      )}

      <p className={isComplete ? "complete" : "not-complete"}>
        {isComplete ? "complete" : "not-complete"}
      </p>
      <div className="todo-menu">
        <button title="delete" className="btn todo-delete" onClick={deleteTodo}>
          <Icon.Trash />
        </button>
        {isEditMode ? (
          <button className="btn done-btn" onClick={editTodo}>
            done
          </button>
        ) : (
          <button
            title="edit"
            className="btn todo-edit"
            onClick={toggleEditMode}
          >
            <Icon.Edit />
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
