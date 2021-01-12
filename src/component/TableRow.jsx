import React, { Component } from 'react';
import TableCell from './TableCell';

import store from '../States';

class TableRow extends Component {
  constructor() {
    super();

    this.state = store.state;
  }

  //   colChanged() {
  //     console.log("TEST FUNCTION CHANGE COL")
  //     this.setState({ cols: this.state.cols + 2 })

  //     console.log(this.state.cols)
  //   }

  render() {
    let cols = [];
    for (let i = 1; i <= this.state.cols; i++) {
      cols.push(<TableCell key={i} data='&nbsp;' />);
    }

    return <tr>{cols}</tr>;
  }
}

export default TableRow;
