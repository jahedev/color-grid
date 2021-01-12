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
      console.log(i)
      cols.push(<TableCell data="TEST 2" />)
    }
    return <tr>{cols}</tr>
  }
}

export default TableRow
