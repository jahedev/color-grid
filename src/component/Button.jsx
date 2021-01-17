import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.func}>{this.props.name}</button>;
  }
}

export default Button;
