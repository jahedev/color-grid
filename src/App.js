import React, { Component } from 'react';
import Table from './component/Table';
import Toolbar from './component/Toolbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 10,
      cols: 10,
      grid: [[]],
      color: 'red',
    };

    this.genKey = this.genKey.bind(this);
    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
    this.delRow = this.delRow.bind(this);
    this.delCol = this.delCol.bind(this);
    this.handleColoring = this.handleColoring.bind(this);
  }

  componentWillMount() {
    let grid = [[]];

    // user is never allowed to add more than 50 columns or rows
    for (var i = 0; i < 50; i++) {
      grid[i] = []; // <===== initialize the row
      for (var j = 0; j < 50; j++) {
        grid[i][j] = '';
      }
    }

    this.setState({ grid: grid });
  }

  genKey = () => {
    console.log(this.state.rows * this.state.cols * 3);
    return this.state.rows * this.state.cols * 3;
  };

  addRow = (n = 1) => {
    if (this.state.rows < 50) this.setState({ rows: ++this.state.rows });
  };

  addCol = (n = 1) => {
    if (this.state.cols < 50) this.setState({ cols: ++this.state.cols });
  };

  delRow = (n = 1) => {
    this.state.rows > 1 && this.setState({ rows: --this.state.rows });
  };

  delCol = (n = 1) => {
    this.state.cols > 1 && this.setState({ cols: --this.state.cols });
  };

  handleColoring = (e) => {
    const color = this.state.color;

    if (e.target.tagName == 'TD') {
      let colNum = Number(e.target.className);
      let rowNum = Number(e.target.parentNode.className);
      console.log('Row:', rowNum, ' Col:', colNum);

      const td = e.target;

      // td.style.backgroundColor = 'red';
    }
  };

  render() {
    console.log('rendered');
    return (
      <div>
        <h1>
          Rows: {this.state.rows}, Cols: {this.state.cols}
        </h1>
        {
          <Toolbar
            toolbar={[
              { name: 'Add Row', func: this.addRow },
              { name: 'Add Column', func: this.addCol },
              { name: 'Del Row', func: this.delRow },
              { name: 'Del Column', func: this.delCol },
              { name: 'Fill All', func: this.delCol },
              { name: 'Fill Uncolored', func: this.delCol },
              { name: 'Clear All', func: this.delCol },
            ]}
          />
        }
        <div className='table' onMouseOver={this.handleColoring}>
          <Table
            key={this.state.rows * this.state.cols * 3}
            rows={this.state.rows}
            cols={this.state.cols}
            grid={this.state.grid}
          />
        </div>
      </div>
    );
  }
}
