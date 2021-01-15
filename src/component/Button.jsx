import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      func: props.func,
    };
  }

  render() {
    return <button onClick={this.state.func}>{this.state.name}</button>;
  }
}

export default Button;
