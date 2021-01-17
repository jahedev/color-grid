import React, { Component } from 'react';
import TableCell from './TableCell';

var colNum = 0;

class TableRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cols: props.cols,
      rowNum: props.rowNum,
      colgrid: props.colgrid,
    };
  }

  render() {
    let cols = [];
    for (let i = 1; i <= this.state.cols; i++) {
      let color = this.state.colgrid[i - 1];
      cols.push(
        <TableCell color={color} colNum={colNum++} key={i} data='&nbsp;' />
        // <TableCell colNum={colNum++} key={i} data='&nbsp;' />
      );
    }
    colNum = 0;
    return <tr className={this.state.rowNum}>{cols}</tr>;
  }
}

export default TableRow;
