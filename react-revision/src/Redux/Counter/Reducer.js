import React from "react";
import { connect } from "react-redux";

function Count(props) {
  const { count, dispatch } = props;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>ADD</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>SUB</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Count);
