import React, { PureComponent } from "react";

export default class UserPure extends PureComponent {
  render() {
    console.log("User Component Check Rendering");
    return (
      <>
        <h1>User Component {this.props.count}</h1>
      </>
    );
  }
}
