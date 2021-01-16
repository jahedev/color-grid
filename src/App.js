import React, { Component } from 'react';
import Table from './component/Table';
import Toolbar from './component/Toolbar';
import { SketchPicker } from 'react-color';

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

  changeColor = (color) => {
    this.setState({ color : color.rgb })
    console.log(this.state.color);
  };

  handleColoring = (e) => {
    const color = this.state.color;

  

    if (e.target.tagName == 'TD') {
      let colNum = Number(e.target.className);
      let rowNum = Number(e.target.parentNode.className);
      console.log('Row:', rowNum, ' Col:', colNum);

      let grid = [[]];

      for (var i = 0; i < 10; i++) {
        grid[i] = []; // <===== initialize the row
        for (var j = 0; j < 10; j++) {
          grid[i][j] = 'red';
        }
      }

      this.setState({ grid: grid });

      const td = e.target;

    }
  };


  render() {
    return (
      <div>

        <SketchPicker color={this.state.color} onChange = {this.changeColor } />
        
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
