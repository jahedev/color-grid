import React, { Component } from "react"

import TableRow from "./TableRow"

// CSS
import "../styles/table.css"

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: 10,
      cols: 5,
    }

    this.rowChanged = this.rowChanged.bind(this)
    this.colChanged = this.colChanged.bind(this)
  }

  rowChanged() {
    console.log("TEST FUNCTION CHANGE ROW")
    this.setState({ rows: this.state.rows + 1 })

    console.log(this.state.rows)
  }

  colChanged() {
    console.log("TEST FUNCTION CHANGE COL")
    this.setState({ cols: this.state.cols + 1 })

    console.log(this.state.cols)
  }

  render() {
    let rows = []
    for (let i = 1; i <= this.state.rows; i++) {
      rows.push(<TableRow key={i} cols={this.state.cols} />)
    }

    return (
      <div id="content">
        <button onClick={this.rowChanged}>CLICK row</button>
        <button onClick={this.colChanged}>CLICK col</button>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}

export default Table
