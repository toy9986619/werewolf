import React, { PureComponent } from 'react';
import { JOB_TYPE } from './constants/jobType';
import { GET_ROOM_USERS, SET_JOBS_MEMBER, GET_JOBS_MEMBER } from './constants/event';
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
    socket.on(GET_JOBS_MEMBER, data => {
      console.log(data);
      this.setState({ jobNumber: data });
    })
    socket.emit(GET_ROOM_USERS);
  };

  setJobNumber = key => event => {
    const socket = this.context;
    const { jobNumber } = this.state;
    const newJobNumber = { ...jobNumber, [key]: Number(event.target.value) };
    this.setState({ jobNumber: newJobNumber });

    socket.emit(SET_JOBS_MEMBER, newJobNumber);
  };

  render() {
    const { gameStart, isHost } = this.props;
    const { userNumber, jobNumber } = this.state;
    const { HUMAN, HUNTER, PROPHET, WITCH, WOLF } = jobNumber;

    return (
      <div>
        <div>{`現在人數: ${userNumber}`}</div>
        {isHost && (
          <div>
            <div>
              <label>平民數量</label>
              <select value={HUMAN} onChange={this.setJobNumber('HUMAN')}>
                {Array.from(Array(7).keys()).map(number => (
                  <option value={number}>{number}</option>
                ))}
              </select>
            </div>
            <button type="button" onClick={gameStart}>
              開始遊戲
            </button>
          </div>
        )}
        {!isHost && (
          <div>
            <div>{`平民數量: ${HUMAN}`}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Room;
