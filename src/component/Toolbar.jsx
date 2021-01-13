import React from 'react';
import { render } from 'react-dom';
import Button from './Button';

import store from '../States';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbar: props.toolbar,
    };
  }

  key = 7799966;

  render() {
    console.log('X: ', this.state.toolbar);
    console.log(this.state.toolbar[0]['func']);
    return (
      <div>
        {this.state.toolbar.map((button) => (
          <Button
            key={++this.key}
            name={button['name']}
            func={button['func']}
          />
        ))}
        {/* <Button
          name='Add 1 Column'
          click={() => {
            // this.state.cols += 1;
            store.state.cols += 1;

            console.log(store.state);
          }}
        />
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
        </button> */}
      </div>
    );
  }
}

function test1() {
  console.log('test 1');
}

export default Toolbar;
