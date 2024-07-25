import React, { useState } from "react";

const AddSum = () =>{

    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const [total, setTotal] = useState(0)

    const handleClick = (e) =>{
    e.preventDefault()
    setTotal(Number(number1)+Number(number2))
    }

  return(
    <div>
        <form action="">
            <label>FirstNum: <input type="number" name="num1" value={number1} onChange={(e)=>{setNumber1(e.target.value)}}/></label>
            <label>SecondNum: <input type="number" name="num2" value={number2} onChange={(e)=>{setNumber2(e.target.value)}}/></label>
            <button onClick={handleClick}>Add</button>
            <p>Total: {total}</p>
        </form>
    </div>
  )
}

export default AddSum;