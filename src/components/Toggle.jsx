import React, { useState } from 'react'

const Toggle = () => {

  const [Toggle, setToggle] = useState();
    return (
    <div>
      <h1>Toggle Menu</h1>
      {Toggle &&
      <div style={{backgroundColor: 'black'}}>
       <p>Hi my name is paramesh</p>
      </div>}

    </div>
  )
}

export default Toggle