import React, { useState } from 'react'

const Toggle = () => {

  const [Toggle, setToggle] = useState(true);
    return (
    <div>
      
      
        <button onClick={()=>setToggle(!Toggle)}>Hide Element Below</button>
        {Toggle && <h1>Toggle Menu</h1>}
  

    </div>
  )
}

export default Toggle