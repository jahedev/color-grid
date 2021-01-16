import React, { Component } from 'react';

class TableCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colNum: props.colNum,
    };
  }

  render() {
    const { color = '' } = this.props;
    // style={{ backgroundColor: color }}

    return (
      <td onMouseOver={this.props.mouseOver} className={this.state.colNum}>
        {this.props.data}
      </td>
    );
  }
}

export default TableCell;
