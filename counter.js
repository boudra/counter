import ReactDOM from "react-dom";
import React from "react";
import { connect } from "react-redux";

import {logOut} from "./actions";

function Counter({index, counter, increment, decrement}) {
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>{counter}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function mapStateToProps(state, {index}) {
  return {
    counter: state.counters[index]
  };
}

function mapDispatchToProps(dispatch, {index}) {
  return {
    increment: () => dispatch({ type: "INCREMENT", index }),
    decrement: () => dispatch({ type: "DECREMENT", index }),
    logOut
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
