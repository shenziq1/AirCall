import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import ActivityFeed from "./ui/activityFeed/ActivityFeed.jsx";
import ActivityDetail from "./ui/activityDetail/ActivityDetail.jsx";

const history = createBrowserHistory();

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <Switch>
          <Route exact name="activityFeed" path="/" component={ActivityFeed} />
          <Route exact name="activityFeed" path="/activities/:id" component={ActivityDetail} />
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
