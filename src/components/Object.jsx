import React from 'react'

const Object = () => {
  const Person = {
    name: 'John',
    age: 30,
    gender: 'male'
  }
  return (
    <div>
        <h1>Object</h1>
        <p>Object is a collection of key-value pairs.</p>
        <label htmlFor="">UserName<input type="text" /></label>
    </div>
  )
}

export default Object