import React from 'react';
import { render } from 'react-dom';
import Button from './Button';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  key = 7799966; // random key

  render() {
    return (
      <div className='toolbar'>
        {this.props.toolbar.map((button) => (
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
