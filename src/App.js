import React, { Component } from 'react';
import Table from './component/Table';
import Toolbar from './component/Toolbar';

export default class App extends Component {
  state = {
    rows: 15,
    cols: 15,
  };
  render() {
    return (
      <div>
        <Toolbar clickHandler={this.handleClick} />
        <Table rows={this.state.rows} cols={this.state.cols} />
      </div>
    );
  }
  handleClick = (buttonName) => {
    this.setState({
      rows: 5,
      cols: 5,
    });
  };
}
