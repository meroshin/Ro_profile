import React, { useState } from "react";
import "./App.css";
function Counter() {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);


//   function Increment()
//   {
//     setCount(()=>count + 1);
//   }
//   function Decrement()
//   {
//     setCount(()=>count - 1);
//   }


  return (
    <div className="counter">
      <h1>Counter</h1>
      <button onClick={() => setShowCounter(!showCounter)}>{showCounter ? "Hide Show Counter" : "Show Counter"}</button>

      {showCounter ? (
        <div>
          <h5>Number is {count} </h5>
          <button onClick={()=> setCount(count + 1)}>Add +</button>
          <button onClick={()=> setCount(count - 1)}>Sub -</button>
        </div>
      ) : null}
    </div>
  );
}

export default Counter;
