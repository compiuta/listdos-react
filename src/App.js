import React, { useState, useEffect } from "react";
import Todo from "./Todo";

const testData = [
  {
    id: 1,
    todo: "work",
    complete: false,
  },
  {
    id: 2,
    todo: "eat",
    complete: false,
  },
  {
    id: 3,
    todo: "sleep",
    complete: false,
  },
];

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if (!localStorage.hasOwnProperty("listdos")) {
      localStorage.setItem("listdos", JSON.stringify(testData));
    }

    setData(JSON.parse(localStorage.getItem("listdos")));
    setIsLoading(false);
  }, []);

  return (
    <div className={isLoading ? "loading container" : "container"}>
      {data.map((data) => {
        return <Todo key={data.id} {...data} />;
      })}
    </div>
  );
};

export default App;
