import React, { Component } from 'react';
import Table from './component/Table';
import Toolbar from './component/Toolbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 10,
      cols: 10,
    };

    this.genKey = this.genKey.bind(this);
    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
    this.delRow = this.delRow.bind(this);
    this.delCol = this.delCol.bind(this);
    this.handleColoring = this.handleColoring.bind(this);
  }

  genKey = () => {
    console.log(this.state.rows * this.state.cols * 3);
    return this.state.rows * this.state.cols * 3;
  };

  addRow = (n = 1) => {
    this.setState({ rows: ++this.state.rows });
    this.forceUpdate();
    setTimeout(() => {
      console.log(this.state);
    });
  };

  addCol = (n = 1) => {
    this.setState({ cols: ++this.state.cols });
    setTimeout(() => {
      console.log('ZZZ:', this.state);
    });
  };

  delRow = (n = 1) => {
    this.state.rows > 1 && this.setState({ rows: --this.state.rows });
  };

  delCol = (n = 1) => {
    this.state.cols > 1 && this.setState({ cols: --this.state.cols });
  };

  handleColoring = (e) => {
    if (e.target.tagName == 'TD') {
      console.log(e.target);

      const td = e.target;
      if (true) {
        td.style.backgroundColor = 'red';
      }
    }
  };

  render() {
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
            onClick={(e) => this.handleColoring(e)}
          />
        </div>
      </div>
    );
  }
}
