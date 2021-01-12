import React, { Component } from "react"
import TableCell from "./TableCell"

class TableRow extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    let cols = []
    for (let i = 1; i <= this.props.cols; i++) {
      cols.push(<TableCell key={i} data="TEST 2" />)
    }
    return <tr>{cols}</tr>
  }
}

export default TableRow
