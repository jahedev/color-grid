import React, { Component } from 'react';
import TableCell from './TableCell';

var colNum = 0;

class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cols = [];
    for (let i = 1; i <= this.props.cols; i++) {
      let color = this.props.colgrid[i - 1];
      cols.push(
        <TableCell color={color} colNum={colNum++} key={i} data='&nbsp;' />
      );
    }
    colNum = 0;
    return <tr className={this.props.rowNum}>{cols}</tr>;
  }
}

export default TableRow;
