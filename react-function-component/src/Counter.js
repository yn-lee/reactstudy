import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    /*
    //setNumber(number+1);
    setNumber((prevNumber) => prevNumber + 1); 
    // 함수를 넣어줄 수도 있음 updateFunc -> 최적화
    */
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    /*setNumber(number - 1);*/
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
