import React, { PureComponent } from 'react';

class Login extends PureComponent {
  constructor(props){
    super(props);
    this.state = { name: '' };
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  }

  login = () => {
    const { login } = this.props;
    const { name } = this.state;
    login(name);
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <div>輸入你的暱稱</div>
        <div>
          <input type="text" value={name} onChange={this.onChangeName}/>
          <button type="button" onClick={this.login}>登入</button>
        </div>
      </div>
    )
  }
}

export default Login;