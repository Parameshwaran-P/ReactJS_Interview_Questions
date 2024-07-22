import React from 'react'
import CounterApp from './components/CounterApp'
import MyForm from './components/MyForm'
import FetchData from './components/FetchData'
import Toggle from './components/Toggle'

const App = () => {
  return (
    <div>
      <CounterApp/>
      <MyForm/>
      <FetchData/>
      <Toggle/>
    </div>
  )
}

export default App