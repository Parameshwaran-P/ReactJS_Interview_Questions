import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
        .catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <table border='1'>
            <thead>
               <tr>
               <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                </tr>
               
            </thead>
            <tbody>
                { users.map((user)=>(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default FetchData