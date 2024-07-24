import React, { useState } from 'react'

const MyForm = () => {
  const [input, setInput] = useState({})
    const handleClick = (e) => {
        e.preventDefault()
        console.log(input);
    }
    const handleChange = (e) =>{
      const {name, value} = e.target
      setInput((prev)=>{return {...prev, [name]: value}})
    }
  return (
    <div>
        {/* using contro component */}
        <form onSubmit={handleClick}>
            <label>Name<input type="text" onChange={handleChange} value={input.name} name='name'/></label>
            <label>Email<input type="text" onChange={handleChange} value={input.email} name='email'/></label>
            <button type='submit'>Submit</button>
        </form>

        
          <ul>
            {input.map((user, index)=>(
            <li key={index}>{user.name}</li>
           
            ))}
            
          </ul>
        
    </div>
  )
}

export default MyForm;