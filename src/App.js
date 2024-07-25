import React from 'react'
import CounterApp from './components/CounterApp'
import MyForm from './components/MyForm'
import FetchData from './components/FetchData'
import Toggle from './components/Toggle'
import Listnames from './components/List_names'
import AddSum from './components/AddSum'

const App = () => {
  return (
    <div>
      <CounterApp/>
      <MyForm/>
      <FetchData/>
      <Toggle/>
      <Listnames/>
      <AddSum/>
    </div>
  )
}

export default App