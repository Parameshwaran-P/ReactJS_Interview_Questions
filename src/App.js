import React from 'react'
import CounterApp from './components/CounterApp'
import MyForm from './components/MyForm'
import FetchData from './components/FetchData'

const App = () => {
  return (
    <div>
      <CounterApp/>
      <MyForm/>
      <FetchData/>
    </div>
  )
}

export default App