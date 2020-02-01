import React, { PureComponent } from 'react';
import { JOB_TYPE } from './constants/jobType';
import { GET_ROOM_USERS } from './constants/event';
import SocketContext from './SocketContext';

class Room extends PureComponent {
  static contextType = SocketContext;

  constructor(props) {
    super(props);
    this.state = {
      userNumber: 0,
      jobNumber: {
        [JOB_TYPE.HUMAN]: 0,
        [JOB_TYPE.HUNTER]: 0,
        [JOB_TYPE.PROPHET]: 0,
        [JOB_TYPE.WITCH]: 0,
        [JOB_TYPE.WOLF]: 0,
      },
    };
  }

  componentDidMount() {
    this.getRoomUserNumber();
  }

  getRoomUserNumber = () => {
    const socket = this.context;
    socket.on(GET_ROOM_USERS, data => {
      console.log(data);
      this.setState({ userNumber: data });
    });
    socket.emit(GET_ROOM_USERS);
  };

  render() {
    const { gameStart, isHost } = this.props;
    const { userNumber } = this.state;

    return (
      <div>
        <div>{`現在人數: ${userNumber}`}</div>
        {isHost && (
          <button type="button" onClick={gameStart}>
            開始遊戲
          </button>
        )}
      </div>
    );
  }
}

export default Room;
