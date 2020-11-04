import React from 'react';

class Counter extends React.Component {
  state = {
    counter: 0,
  }

  setStateNew = (newCounter) => {
    this.setState({ counter: newCounter });
  };

  clickAddCounter = () => {
    if (this.state.counter < 10) {
      this.setStateNew(this.state.counter + 1);
    } else {
      this.setStateNew(0);
    }
  }

  render() {
    return (
      <div>
        <p>Our counter is at {this.state.counter}</p>
  
        <button onClick={this.clickAddCounter}>Click to increase counter in ONE!</button>
      </div>
    );
  }
}

export default Counter;
