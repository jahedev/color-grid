import React from 'react';
import { render } from 'react-dom';

import store from '../States';

class Toolbar extends React.Component {
  constructor() {
    super();
    this.state = store.state;
  }
  render() {
    return (
      <div>
        <button> Add Column </button>
        <button> Remove Column </button>
        <button> Add Row </button>
        <button> Remove Row </button>
        <button> Fill All </button>
        <button> Fill Uncolored </button>
        <button> Clear All </button>

        <button
          onClick={() => {
            this.state.cols += 1;
            console.log(this.state.cols);
          }}
        >
          {' '}
          Color Select{' '}
        </button>
      </div>
    );
  }
}

export default Toolbar;
