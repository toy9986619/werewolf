import React, { PureComponent } from 'react';
import io from 'socket.io-client';

import Login from './Login';
import Room from './Room';
import { CREATE_USER, GAME_INIT, JOB_INIT } from './constants/event';
import STATUS from './constants/status';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.socket = null;

    this.state = {
      status: STATUS.LOGIN,
    }
  }

  componentDidMount() {
    this.initSocket();
  }

  initSocket = () => {
    this.socket = io.connect('http://localhost:9999');
    this.socket.on(JOB_INIT, (data) => {
      console.log(data);
    })
    console.log('init');
  }

  login = (name) => {
    this.socket.emit(CREATE_USER, { name });
    this.setState({ status: STATUS.ROOM });
  }

  gameStart = () => {
    this.socket.emit(GAME_INIT);
  }

  render() {
    const { status } = this.state;

    return (
      <div>
        {
          status === STATUS.LOGIN && (
            <Login login={this.login} />
          )
        }
        {
          status === STATUS.ROOM && (
            <Room gameStart={this.gameStart}/>
          )
        }
      </div>
    );
  }
}

export default App;