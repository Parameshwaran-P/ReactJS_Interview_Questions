import React, { useState } from 'react'

const CounterApp = () => {

    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h1>Counter App</h1>
        <button onClick={()=>{setCounter(counter+1)}}>Increment</button>
        <button onClick={()=>{setCounter(counter-1)}}>Decrement</button>
        <p>{counter}</p>
    </div>
  )
}

export default CounterApp