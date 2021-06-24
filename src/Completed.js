import React from "react";
import TaskList from "./TaskList";
import fish from "./fish2.png";
const Completed = () => {
  const info = {
    listType: "completedTasks",
    listCompleted: true,
    message: "No tasks completed",
    img: fish,
  };
  return <TaskList {...info} />;
};

export default Completed;
