import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
    const {name, value} = e.target;
    setInput((prev)=>{
    return {...prev, [name]:value}
    
    })
    }
    console.log(input);

    const handleClick = (e) => {
    e.preventDefault();

    }
  return (
    <>
    <div className='container'>
     <div className='to-do'>
        <div className='form-container'>
        <form action="">
        <input type="text" className='form-input' name='text' onChange={handleChange}/>
        <button className='btn'onClick={handleClick} value={input}>Add</button>
        </form>    
        </div>
      <ul className='todo__list'>
        { input.map((data, index)=>(
            <li key={index}>{data.text}</li>
          ))
        
       }
      </ul>
     </div>
    </div>
    </>
  )
}

export default Todo