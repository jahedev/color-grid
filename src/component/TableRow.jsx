import React, { Component } from 'react';
import TableCell from './TableCell';

import store from '../States';

var colNum = 0;

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cols: props.cols,
      rowNum: props.rowNum,
    };
  }

  render() {
    let cols = [];
    for (let i = 1; i <= this.state.cols; i++) {
      cols.push(<TableCell colNum={colNum++} key={i} data='&nbsp;' />);
    }
    colNum = 0;
    return <tr className={this.state.rowNum}>{cols}</tr>;
  }
}

export default TableRow;
