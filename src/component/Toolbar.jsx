import React from 'react';
import { render } from 'react-dom';
import Button from './Button';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbar: props.toolbar,
    };
  }

  key = 7799966;

  render() {
    return (
      <div className='toolbar'>
        {this.state.toolbar.map((button) => (
          <Button
            key={++this.key}
            name={button['name']}
            func={button['func']}
          />
        ))}
      </div>
    );
  }
}

export default Toolbar;
