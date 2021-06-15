import React from "react";
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
  return testData.map((data) => {
    return <Todo key={data.id} {...data} />;
  });
};

export default App;
