import React, { useState, useEffect } from "react";
import Task from "./Task";
import fish from "./fish.png";
const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [taskValue, setTaskValue] = useState("");

  const fetchData = () => {
    const parsedData = JSON.parse(localStorage.getItem("listdos"));
    setData(parsedData);
    console.log(parsedData);
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
    console.log(newData);
    newData.tasksToComplete++;
    console.log(`newtocompletee ${newData.tasksToComplete}`);
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
      {data.tasksToComplete > 0 ? (
        <div className="listdos">
          {data.data.map((item) => {
            if (!item.complete) {
              return (
                <Task
                  key={item.id}
                  {...item}
                  allData={data}
                  sendData={sendData}
                />
              );
            }
            return;
          })}
        </div>
      ) : (
        <div className="no-tasks">
          <h4>No tasks yet</h4>
          <img src={fish} alt="fish" className="img-responsive" />
        </div>
      )}
    </div>
  );
};

export default Home;
