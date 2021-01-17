// React Stuff
import React, { Component } from 'react';
import Table from './component/Table';
import Toolbar from './component/Toolbar';
import { SketchPicker } from 'react-color';

// JS Helper Code
import { colorHeader } from './helpers/color.js';

// CSS
import './styles/app.css';

// user is never allowed to add more than "limit"
// number of rows or cols
var limit = 25;

// This 2D array is used to save user's colors before
// it is saved to this.state.grid
var updateGrid = [[]];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 10,
      cols: 10,
      grid: [[]],
      color: '#ff577f', // default color
    };

    this.genKey = this.genKey.bind(this);
    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
    this.delRow = this.delRow.bind(this);
    this.delCol = this.delCol.bind(this);
    this.fillAll = this.fillAll.bind(this);
    this.fillUncolored = this.fillUncolored.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
    this.handleColoring = this.handleColoring.bind(this);
  }

  componentWillMount() {
    for (var i = 0; i < limit; i++) {
      updateGrid[i] = []; // <===== initialize the row
      for (var j = 0; j < limit; j++) {
        updateGrid[i][j] = '';
      }
    }

    this.updateGrid();
  }

  componentDidMount() {
    colorHeader(document.querySelector('h1'));
  }

  /* #region : class methods */
  genKey = () => {
    console.log(this.state.rows * this.state.cols * 3);
    return this.state.rows * this.state.cols * 3;
  };

  addRow = (n = 1) => {
    this.updateGrid();
    if (this.state.rows < limit) this.setState({ rows: ++this.state.rows });
  };

  addCol = (n = 1) => {
    this.updateGrid();
    if (this.state.cols < limit) this.setState({ cols: ++this.state.cols });
  };

  delRow = (n = 1) => {
    this.updateGrid();
    this.state.rows > 1 && this.setState({ rows: --this.state.rows });
  };

  delCol = (n = 1) => {
    this.updateGrid();
    this.state.cols > 1 && this.setState({ cols: --this.state.cols });
  };

  fillAll = () => {
    for (var i = 0; i < limit; i++) {
      for (var j = 0; j < limit; j++) {
        updateGrid[i][j] = this.state.color;
      }
    }

    this.updateGrid();
  };

  fillUncolored = () => {
    for (var i = 0; i < limit; i++) {
      for (var j = 0; j < limit; j++) {
        if (updateGrid[i][j] == '') updateGrid[i][j] = this.state.color;
      }
    }

    this.updateGrid();
  };
  clearAll = () => {};

  changeColor = (color) => {
    this.setState({ color: color.hex });
    console.log(this.state.color);
  };

  updateGrid = () => {
    this.setState({ grid: updateGrid });
  };

  handleColoring = (e) => {
    const color = this.state.color;

    if (e.target.tagName == 'TD') {
      let colNum = Number(e.target.className);
      let rowNum = Number(e.target.parentNode.className);
      console.log('Row:', rowNum, ' Col:', colNum);

      updateGrid[rowNum][colNum] = color;
      e.target.style.backgroundColor = color;
    }
  };

  /* #endregion : class methods */

  render() {
    console.log('rendered');
    return (
      <div>
        <div className='header-container'>
          <h1>
            <span className='red'>React.js</span> Color Grid
          </h1>
          {
            <Toolbar
              toolbar={[
                { name: 'Add Row', func: this.addRow },
                { name: 'Add Column', func: this.addCol },
                { name: 'Del Row', func: this.delRow },
                { name: 'Del Column', func: this.delCol },
                { name: 'Fill All', func: this.fillAll },
                { name: 'Fill Uncolored', func: this.fillUncolored },
                { name: 'Clear All', func: this.clearAll },
              ]}
            />
          }
        </div>
        <h5>
          Rows: {this.state.rows}, Cols: {this.state.cols}
        </h5>
        <div className='separated-columns'>
          <div className='sketcher-picker'>
            <SketchPicker
              color={this.state.color}
              onChange={this.changeColor}
            />
          </div>
          <div className='table' onMouseOver={this.handleColoring}>
            <Table
              key={this.state.rows * this.state.cols * 3}
              rows={this.state.rows}
              cols={this.state.cols}
              grid={this.state.grid}
              color={this.state.color}
            />
          </div>
        </div>
      </div>
    );
  }
}
