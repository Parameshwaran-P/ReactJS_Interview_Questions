import React, {useRef, useState } from 'react'

const Stopwatch = () => {
    const [time, setTime] = useState(null);
    const [now, setNow] = useState(null);

    const intervelRef = useRef(null)

    const handleStart = () =>{
    setTime(Date.now())
    setNow(Date.now())     
    intervelRef.current = setInterval(()=>{
    setTime(Date.now())
    },10)
    }
    const handleStop = () =>{
      clearInterval(intervelRef.current )
    }

    let timestamp = (time - now)/1000
  return (
   <>
   <h1>Stop Watch: {timestamp}</h1>
   <div>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    <button>Reset</button>
   </div>
   </>
  )
}

export default Stopwatch