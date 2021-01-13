import React, { Component } from 'react';
import Table from './component/Table';
import Toolbar from './component/Toolbar';
import Button from './component/Button';

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
    // setTimeout(() => {
    //   console.log(this.state);
    // });
  };

  delRow = (n = 1) => {
    this.state.rows > 1 && this.setState({ rows: --this.state.rows });
  };

  delCol = (n = 1) => {
    this.state.cols > 1 && this.setState({ cols: --this.state.cols });
  };

  render() {
    console.log('Re-rendering: App');
    console.log(this.state);

    return (
      <div>
        <h1>
          Rows: {this.state.rows}, Cols: {this.state.cols}
        </h1>
        {/* <Toolbar clickHandler={this.handleClick} /> */}
        {/* <Button name='Add Row' click={this.addRows} /> */}
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addCol}>Add Column</button>
        <button onClick={this.delRow}>Del Row</button>
        <button onClick={this.delCol}>Del Column</button>
        <Table
          key={this.state.rows * this.state.cols * 3}
          rows={this.state.rows}
          cols={this.state.cols}
        />
      </div>
    );
  }
}
