import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>Counter</h1>
      </div>
    );
  }
}

export default Counter;
