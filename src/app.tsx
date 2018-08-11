import * as React from 'react';
import './app.css';
import { hot } from "react-hot-loader";
import Root from "./root";

class App extends React.Component {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div className="App">
        <Root />
      </div>
    );
  }
}

export default hot(module)(App);
