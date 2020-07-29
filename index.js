import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import Counter from "./counter";

function reducer(state = {counters: [0, 0, 0]}, action) {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counters:
        state.counters.map((c, i) => {
          if(i === action.index) {
            return c + 1;
          } else {
            return c;
          }
        })
      };

    case "DECREMENT":
      return {...state, counters:
        state.counters.map((c, i) => {
          if(i === action.index) {
            return c - 1;
          } else {
            return c;
          }
        })
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => console.log("NEW STATE", store.getState()));

function App() {
  return (
    <Provider store={store}>
      <Counter index={0}/>
      <Counter index={1} />
      <Counter index={2} />
    </Provider>
  );
}

const root = document.getElementById("root");

ReactDOM.render(<App />, root);
