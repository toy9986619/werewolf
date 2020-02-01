import React, { Component } from 'react';
import io from 'socket.io-client';

import Login from './Login';
import Room from './Room';
import { CREATE_USER, GAME_INIT, JOB_INIT, GET_USER, LOGIN } from './constants/event';
import STATUS from './constants/status';
import SocketContext from './SocketContext';

const socket = io.connect('http://localhost:9999');


class App extends Component {
  constructor(props) {
    super(props);
    this.socket = null;

    this.state = {
      status: STATUS.LOGIN,
      userInfo: {},
    };
  }

  componentDidMount() {
    this.initSocket();
  }

  initSocket = () => {
    // this.socket = io.connect('http://localhost:9999');
    socket.on(JOB_INIT, data => {
      console.log(data);
    });
    console.log('init');
    socket.on(GET_USER, data => {
      console.log('user info:', data);
      this.setState({ userInfo: data });
    });
  };

  login = name => {
    socket.emit(CREATE_USER, { name });
    this.setState({ status: STATUS.ROOM });
  };

  gameStart = () => {
    socket.emit(GAME_INIT);
  };

  render() {
    const { status, userInfo } = this.state;
    const { isHost } = userInfo;
    return (
      <div>
        <SocketContext.Provider value={socket}>
          {status === STATUS.LOGIN && <Login login={this.login} />}
          {status === STATUS.ROOM && <Room isHost={isHost} gameStart={this.gameStart} />}
        </SocketContext.Provider>
      </div>
    );
  }
}

export default App;
