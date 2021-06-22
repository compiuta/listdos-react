import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import TaskList from "./TaskList";

const ReactRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <TaskList listType="home" />
        </Route>
        <Route exact path="/completed">
          <TaskList listType="completed" />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouter;
