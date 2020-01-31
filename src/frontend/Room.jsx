import React, { PureComponent } from 'react';

class Room extends PureComponent {
  render() {
    const { gameStart } = this.props;
    
    return (
      <div>
        <button type="button" onClick={gameStart}>開始遊戲</button>
      </div>
    );
  }
}

export default Room;