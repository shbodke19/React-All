import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    return (
      <>
        <div>
          {this.state.error ? (
            <h1>Custom Page for Error Handling</h1>
          ) : (
            this.props.children
          )}
        </div>
      </>
    );
  }
}

export default ErrorBoundry;
