import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const INCR = () => {
    setCount(prev => prev + 1)
  }
  const DECR = () => {
    if (count > 0) {
      setCount(prev => prev - 1)
    }
  }
    return (
        <div className="card p-3 d-flex column justify-content-around mt-2">
         <h3>Count: {count}</h3>
            <div className="d-flex column justify-content-around mt-2">
                <button className="btn btn-success" onClick={INCR}>INCR</button>
                <button className="btn btn-danger" onClick={DECR}>DECR</button>
            </div>   
        </div>
        
    )
}
export default Counter