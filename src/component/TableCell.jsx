import React, { Component } from 'react';

class TableCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { color = '' } = this.props;

    return (
      <td style={{ backgroundColor: color }} className={this.props.colNum}>
        {this.props.data}
      </td>
    );
  }
}

export default TableCell;
