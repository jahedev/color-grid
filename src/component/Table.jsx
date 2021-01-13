import React, { Component } from 'react';

import TableRow from './TableRow';
import store from '../States';

// CSS
import '../styles/table.css';

class Table extends Component {
  constructor(props) {
    super(props);

    this.rowChanged = this.rowChanged.bind(this);
    this.colChanged = this.colChanged.bind(this);
  }

  rowChanged(n = 1) {
    console.log('TEST FUNCTION CHANGE ROW');
    this.setState({ rows: this.state.rows + n });

    console.log(this.state);
  }

  colChanged() {
    console.log('TEST FUNCTION CHANGE COL');
    console.log('Cols: ', this.state.cols);
    store.state.cols += 1;
  }

  rowChanged(n = 1) {
    console.log('TEST FUNCTION CHANGE ROW');
    this.setState({ rows: this.state.rows + n });

    console.log(this.state.rows);
  }

  render() {
    let rows = [];
    for (let i = 1; i <= this.state.rows; i++) {
      rows.push(<TableRow key={i} cols={this.state.cols} />);
    }

    return (
      <div id='content'>
        <button onClick={() => this.rowChanged()}>CLICK row</button>
        <button onClick={this.colChanged}>CLICK col</button>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
