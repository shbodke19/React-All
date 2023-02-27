import React, { PureComponent } from "react";

export default class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    console.log("Check Rendering");
    return (
      <>
        <h1>Pure Component {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </>
    );
  }
}
