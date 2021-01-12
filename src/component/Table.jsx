import React, { Component } from "react"

import TableCell from "./TableCell"
import TableRow from "./TableRow"

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: 10,
      cols: 5,
    }
  }
  render() {
    let rows = []
    for (let i = 1; i <= this.state.rows; i++) {
      console.log(i)
      rows.push(<TableRow cols={this.state.cols} />)
    }
    console.log(rows)
    return (
      <div id="content">
        <table>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}

export default Table
