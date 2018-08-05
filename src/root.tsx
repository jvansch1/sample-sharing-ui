import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/login";
// import App from "./app";
import Hello from "./components/auth/hello";

const Root = () => {
  return (
    <Router>
      <Switch>
          <Route
            exact path='/'
            render={(props: any) => <Hello />}
          />
          <Route
            path="/login"
            render={(props: any) => <Login />}
          />
      </Switch>
    </Router>
  )
}

export default Root;
