// React
import React, { Component } from 'react';
import TableRow from './TableRow';

// CSS
import '../styles/table.css';

var rowNum = 0;

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rows = [];
    for (let i = 1; i <= this.props.rows; i++) {
      let colgrid = this.props.grid[i - 1];
      let color = rows.push(
        <TableRow
          colgrid={colgrid}
          rowNum={rowNum++}
          key={i}
          cols={this.props.cols}
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
