import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "../../Components/Error";
import Home from "../../Components/Home";

function RouterWrapper() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterWrapper;
