import React, { Component } from 'react';
import Table from './component/Table';
import Toolbar from './component/Toolbar';
import { SketchPicker } from 'react-color';
import './styles/app.css';

var limit = 25;
var updateGrid;

function getRandomColor() {
  var letters = 'BCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: 10,
      cols: 10,
      grid: [[]],
      color: '#ff577f',
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
    for (var i = 0; i < limit; i++) {
      grid[i] = []; // <===== initialize the row
      for (var j = 0; j < limit; j++) {
        grid[i][j] = '';
      }
    }

    updateGrid = grid;
    this.setState({ grid: grid });
  }

  componentDidMount() {
    setInterval(() => {
      const h1 = document.querySelector('h1');
      const color = getRandomColor();
      h1.style.color = color;
    }, 1200);
  }

  genKey = () => {
    console.log(this.state.rows * this.state.cols * 3);
    return this.state.rows * this.state.cols * 3;
  };

  addRow = (n = 1) => {
    this.setState({ grid: updateGrid });
    if (this.state.rows < limit) this.setState({ rows: ++this.state.rows });
  };

  addCol = (n = 1) => {
    this.setState({ grid: updateGrid });
    if (this.state.cols < limit) this.setState({ cols: ++this.state.cols });
  };

  delRow = (n = 1) => {
    this.setState({ grid: updateGrid });
    this.state.rows > 1 && this.setState({ rows: --this.state.rows });
  };

  delCol = (n = 1) => {
    this.setState({ grid: updateGrid });
    this.state.cols > 1 && this.setState({ cols: --this.state.cols });
  };

  changeColor = (color) => {
    this.setState({ color: color.rgb });
    console.log(this.state.color);
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
                { name: 'Fill All', func: this.delCol },
                { name: 'Fill Uncolored', func: this.delCol },
                { name: 'Clear All', func: this.delCol },
              ]}
            />
          }
        </div>
        <h5>
          Rows: {this.state.rows}, Cols: {this.state.cols}
        </h5>
        <div className='table' onMouseOver={this.handleColoring}>
          <Table
            key={this.state.rows * this.state.cols * 3}
            rows={this.state.rows}
            cols={this.state.cols}
            grid={this.state.grid}
            color={this.state.color}
          />
        </div>
        <SketchPicker color={this.state.color} onChange={this.changeColor} />
      </div>
    );
  }
}
