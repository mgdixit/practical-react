import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  handleIncrementButtonClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log("render handleIncrementButtonClick called");
  };

  handleDecrementButtonClick = () => {
    this.setState({
      count: this.state.count - 1,
    });
    console.log("render handleDecrementButtonClick called");
  };

  render() {
    console.log("render function called");
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleIncrementButtonClick}>increment</button>
        <button onClick={this.handleDecrementButtonClick}>decrement</button>
      </div>
    );
  }
}

export default Counter;
