import React, { PureComponent } from 'react';
import io from 'socket.io-client';
import { CREATE_USER } from './constants/event';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.socket = null;
  }

  componentDidMount() {
    this.initSocket();
  }

  initSocket = () => {
    this.socket = io.connect('http://localhost:9999');
    this.socket.emit(CREATE_USER, { data: 'testing' });
  }

  render() {
    return (
      <div>
        hello, world!
      </div>
    );
  }
}

export default App;