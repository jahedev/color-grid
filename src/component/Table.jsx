import React, { Component } from 'react';

import TableRow from './TableRow';
// import store from '../States';

// CSS
import '../styles/table.css';

var rowNum = 0;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: props.rows,
      cols: props.cols,
    };
  }

  render() {
    let rows = [];
    for (let i = 1; i <= this.state.rows; i++) {
      rows.push(<TableRow rowNum={rowNum++} key={i} cols={this.state.cols} />);
    }

    rowNum = 0;

    return (
      <div id='content'>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
