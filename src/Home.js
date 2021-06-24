import React from "react";
import TaskList from "./TaskList";
import fish from "./fish.png";
const Home = () => {
  const info = {
    listType: "tasksToComplete",
    listCompleted: false,
    message: "No tasks yet",
    img: fish,
  };
  return <TaskList {...info} />;
};

export default Home;
