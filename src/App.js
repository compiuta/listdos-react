import React, { useState, useEffect } from "react";
import Todo from "./Todo";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [todoValue, setTodoValue] = useState("");

  const fetchData = () => {
    setData(JSON.parse(localStorage.getItem("listdos")));
    setIsLoading(false);
  };

  const sendData = () => {
    localStorage.setItem("listdos", JSON.stringify(data));
  };

  const addTodo = () => {
    console.log("add");
  };

  const todoInputChange = (e) => {
    setTodoValue(e.target.value);
  };

  useEffect(() => {
    if (!localStorage.hasOwnProperty("listdos")) {
      localStorage.setItem("listdos", JSON.stringify([]));
    }

    fetchData();
  }, []);

  return (
    <div className={isLoading ? "loading container" : "container"}>
      <div className="listdos">
        {data.map((data) => {
          return <Todo key={data.id} {...data} setData={setData} />;
        })}
      </div>
      <input type="text" value={todoValue} onChange={todoInputChange} />
      <button className="add-todo" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default App;
