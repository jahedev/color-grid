import React, { Component } from 'react';

import TableRow from './TableRow';

// CSS
import '../styles/table.css';

var rowNum = 0;

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: props.rows,
      cols: props.cols,
      grid: props.grid,
    };
  }

  render() {
    let rows = [];
    for (let i = 1; i <= this.state.rows; i++) {
      let colgrid = this.state.grid[i - 1];
      let color = rows.push(
        <TableRow
          colgrid={colgrid}
          rowNum={rowNum++}
          key={i}
          cols={this.state.cols}
          color={this.props.color}
        />
      );
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
