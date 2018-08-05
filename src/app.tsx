import * as React from 'react';
import './app.css';

class App extends React.Component {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
