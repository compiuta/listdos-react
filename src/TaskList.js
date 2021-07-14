import React, { useState, useEffect } from "react";
import Task from "./Task";
const TaskList = ({ listType, listCompleted, message, img }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [taskValue, setTaskValue] = useState("");

  const fetchData = () => {
    const parsedData = JSON.parse(localStorage.getItem("listdos"));
    setData(parsedData);
    setIsLoading(false);
  };

  const sendData = (newData) => {
    console.log("sending");
    localStorage.setItem("listdos", JSON.stringify(newData));
    setData(newData);
    setIsLoading(false);
  };

  const addTask = () => {
    console.log("add");
    const newTask = {
      id: Date.now() + Math.random(),
      task: taskValue,
      complete: false,
    };

    const newData = { ...data };
    newData.tasksToComplete++;
    newData.data.push(newTask);
    sendData(newData);

    setTaskValue("");
  };

  const taskInputChange = (e) => {
    setTaskValue(e.target.value);
  };

  useEffect(() => {
    if (!localStorage.hasOwnProperty("listdos")) {
      const initialData = {
        tasksToComplete: 0,
        completedTasks: 0,
        data: [],
      };
      localStorage.setItem("listdos", JSON.stringify(initialData));
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="tasks-container">
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <div className={isLoading ? "loading tasks-container" : "tasks-container"}>
      <textarea
        className="task-textarea"
        rows="2"
        value={taskValue}
        onChange={taskInputChange}
      ></textarea>
      <button
        className="btn add-task"
        onClick={addTask}
        disabled={taskValue.replace(/ /g, "") ? "" : "disabled"}
      >
        Add Task
      </button>
      {data[listType] > 0 ? (
        <div className="listdos">
          {data.data.map((item) => {
            if (item.complete === listCompleted) {
              return (
                <Task
                  key={item.id}
                  {...item}
                  allData={data}
                  sendData={sendData}
                />
              );
            }
            return null;
          })}
        </div>
      ) : (
        <div className="no-tasks">
          <h4>{message}</h4>
          <img src={img} alt="fish" className="img-responsive" />
        </div>
      )}
    </div>
  );
};

export default TaskList;
