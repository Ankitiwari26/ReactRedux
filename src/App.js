import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementBy5, decrementBy5 } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(incrementBy5())}>Increment By 5</button>
      <button onClick={() => dispatch(decrementBy5())}>Decrement By 5</button>
    </div>
  );
}

export default App;
