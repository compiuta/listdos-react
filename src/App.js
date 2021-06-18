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

  const sendData = (newData) => {
    console.log("sending");
    localStorage.setItem("listdos", JSON.stringify(newData));
    setData(newData);
    setIsLoading(false);
  };

  const addTodo = () => {
    console.log("add");
    const newTodo = {
      id: Date.now() + Math.random(),
      todo: todoValue,
      complete: false,
    };

    const newData = [...data];

    newData.push(newTodo);

    sendData(newData);

    setTodoValue("");
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
        {data.map((item) => {
          return (
            <Todo key={item.id} {...item} allData={data} sendData={sendData} />
          );
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
