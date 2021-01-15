import React, { Component } from 'react';

class TableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colNum: props.colNum,
    };
  }

  render() {
    return <td className={this.state.colNum}>{this.props.data}</td>;
  }
}

export default TableCell;
