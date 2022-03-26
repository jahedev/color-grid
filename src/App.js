// React
import React, { Component } from 'react'
import Table from './component/Table'
import Toolbar from './component/Toolbar'
import { SketchPicker } from 'react-color'

// Libraries
import html2canvas from 'html2canvas'
// import ReImg from './lib/reimg'
import reimg from 'reimg'

// CSS
import './styles/app.css'

// user is never allowed to add more than "limit"
// number of rows or cols
var limit = 25

// This 2D array is used to save user's colors before
// it is saved to this.state.grid
var updateGrid = [[]]

// table
var table = document.querySelector('.table')

// Mouse Events on Table
var events = {
  mouseDown: false,
  mouseLeft: true,
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: 10,
      cols: 10,
      grid: [[]],
      color: '#ff577f', // default color
    }

    this.addRow = this.addRow.bind(this)
    this.addCol = this.addCol.bind(this)
    this.delRow = this.delRow.bind(this)
    this.delCol = this.delCol.bind(this)
    this.fillAll = this.fillAll.bind(this)
    this.fillUncolored = this.fillUncolored.bind(this)
    this.clearAll = this.clearAll.bind(this)
    this.download = this.download.bind(this)
    this.updateColor = this.updateColor.bind(this)
    this.updateGrid = this.updateGrid.bind(this)
    this.handleColoring = this.handleColoring.bind(this)
  }

  componentWillMount() {
    for (var i = 0; i < limit; i++) {
      updateGrid[i] = [] // <===== initialize the row
      for (var j = 0; j < limit; j++) {
        updateGrid[i][j] = ''
      }
    }

    this.updateGrid()
  }

  componentDidMount() {
    // colorHeader(document.querySelector('h1'));
    table = document.querySelector('.table')

    table.onmousedown = function () {
      events.mouseDown = true
    }
    table.onmouseup = function () {
      events.mouseDown = false
    }

    table.addEventListener('click', (e) => this.updateColor(e))
    table.addEventListener('mouseleave', (e) => (events.mouseLeft = true))
    table.addEventListener('mousedown', (e) => {
      events.mouseLeft = false
      this.updateColor(e)
    })
  }

  /* #region : class methods */

  addRow = (n = 1) => {
    this.updateGrid()
    if (this.state.rows < limit) this.setState({ rows: this.state.rows + 1 })
  }

  addCol = (n = 1) => {
    this.updateGrid()
    if (this.state.cols < limit) this.setState({ cols: this.state.cols + 1 })
  }

  delRow = (n = 1) => {
    this.updateGrid()
    this.state.rows > 1 && this.setState({ rows: this.state.rows - 1 })
  }

  delCol = (n = 1) => {
    this.updateGrid()
    this.state.cols > 1 && this.setState({ cols: this.state.cols - 1 })
  }

  fillAll = () => {
    for (var i = 0; i < limit; i++) {
      for (var j = 0; j < limit; j++) {
        updateGrid[i][j] = this.state.color
      }
    }
    this.updateGrid()
  }

  fillUncolored = () => {
    for (var i = 0; i < limit; i++) {
      for (var j = 0; j < limit; j++) {
        if (updateGrid[i][j] == '') updateGrid[i][j] = this.state.color
      }
    }
    this.updateGrid()
  }

  clearAll = () => {
    // this method fills the whole grid witha color and
    // then clears it after 300ms, otherwise for some reason
    // react does not re-render.
    this.fillAll()
    setTimeout(() => {
      for (var i = 0; i < limit; i++) {
        for (var j = 0; j < limit; j++) {
          updateGrid[i][j] = ''
        }
      }
      this.updateGrid()
    }, 300)
  }

  download = () => {
    // this method uses html2canvas and reImg to download the
    // pixel art drawn by user.
    html2canvas(table)
      .then((canvas) => {
        window.ReImg.fromCanvas(canvas).downloadPng()
      })
      .then((_) => {
        // this is to delete an a:href tag that is created to download the image
        console.log(document.body.querySelector('a:last-child').remove())
      })
  }

  changeColor = (color) => {
    this.setState({ color: color.hex })
  }

  updateGrid = () => {
    this.setState({ grid: updateGrid })
  }

  updateColor = (e) => {
    // colors a TD and saves changes to updateGrid
    // without changing this.state.grid
    if (e.target.tagName === 'TD') {
      const td = e.target
      const color = this.state.color

      let colNum = Number(td.className)
      let rowNum = Number(td.parentNode.className)

      // save changes to updateGrid and color the table
      updateGrid[rowNum][colNum] = color
      td.style.backgroundColor = color
    }
  }

  handleColoring = (e) => {
    if (events.mouseDown && !events.mouseLeft) {
      this.updateColor(e)
    }
  }

  /* #endregion : class methods */

  render() {
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
                { name: 'Download', func: this.download },
              ]}
            />
          }
        </div>
        <h5>
          Rows: {this.state.rows}, Cols: {this.state.cols}
        </h5>
        <div className='separated-columns'>
          <div className='sketcher-picker'>
            {/* A third party color picker library */}
            <SketchPicker
              color={this.state.color}
              onChange={this.changeColor}
            />
          </div>
          <div className='table' onMouseOver={this.handleColoring}>
            <Table
              key={this.state.rows * this.state.cols}
              rows={this.state.rows}
              cols={this.state.cols}
              grid={this.state.grid}
              color={this.state.color}
            />
          </div>
        </div>
      </div>
    )
  }
}
