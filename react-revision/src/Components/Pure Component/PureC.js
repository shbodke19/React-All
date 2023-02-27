import React, { Component } from "react";
import UserPure from "./UserPure";

export default class PureC extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <>
        {/* <h1>Pure Component </h1> */}
        <UserPure count={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </>
    );
  }
}
