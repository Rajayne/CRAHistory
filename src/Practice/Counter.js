import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>Counter</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+ 1</button>
        <button onClick={this.decrement}>- 1</button>
      </div>
    );
  }
}

export default Counter;
