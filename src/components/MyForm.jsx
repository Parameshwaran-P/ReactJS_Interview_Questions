import React, { useState } from 'react'

const MyForm = () => {
  const [input, setInput] = useState({name:"", email:""})
  const [data, setData] = useState([])
    const handleClick = (e) => {
        e.preventDefault();
        setData((prev)=>[...prev, input]);
        setInput({name:"", email:""})
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
            {data.map((user, index)=>(
            <li key={index}>
              {user.name} - {user.email}
             </li>
            ))}
            
          </ul>
        
    </div>
  )
}

export default MyForm;