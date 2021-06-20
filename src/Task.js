import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";

const Task = ({ id, task, complete, allData, sendData }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editInputValue, setEditInputValue] = useState(task);
  const [isComplete, setIsComeplete] = useState(complete);
  const getEditedData = () => {
    const editedData = {
      id: id,
      task: editInputValue,
      complete: isComplete,
    };

    const newData = allData.map((item) =>
      item.id === editedData.id ? editedData : item
    );

    return newData;
  };

  const deleteTask = () => {
    const filteredData = allData.filter((item) => item.id !== id);

    sendData(filteredData);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleEditInputValue = (e) => {
    setEditInputValue(e.target.value);
  };

  const completeTask = () => {
    setIsComeplete(!isComplete);
  };

  const editTask = () => {
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
    <div className={isEditMode ? "task-container edit-mode" : "task-container"}>
      {isEditMode ? (
        <input
          type="text"
          value={editInputValue}
          onChange={handleEditInputValue}
        />
      ) : (
        <h4 className="task">
          <input
            type="checkbox"
            onClick={completeTask}
            defaultChecked={isComplete ? "checked" : null}
          />
          {task}
        </h4>
      )}

      <p className={isComplete ? "complete" : "not-complete"}>
        {isComplete ? "complete" : "not-complete"}
      </p>
      <div className="task-menu">
        <button title="delete" className="btn task-delete" onClick={deleteTask}>
          <Icon.Trash />
        </button>
        {isEditMode ? (
          <button className="btn done-btn" onClick={editTask}>
            done
          </button>
        ) : (
          <button
            title="edit"
            className="btn task-edit"
            onClick={toggleEditMode}
          >
            <Icon.Edit />
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
