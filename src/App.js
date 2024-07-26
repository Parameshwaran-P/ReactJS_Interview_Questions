import React from 'react'
import CounterApp from './components/CounterApp'
import MyForm from './components/MyForm'
import FetchData from './components/FetchData'
import Toggle from './components/Toggle'
import Listnames from './components/List_names'
import AddSum from './components/AddSum'
import Children from './components/Children'
import Parent from './components/Parent'

const App = () => {
  return (
    <div>
      <CounterApp/>
      <MyForm/>
      <FetchData/>
      <Toggle/>
      <Listnames/>
      <AddSum/>
      <Parent><Children/></Parent> 
    </div>
  )
}

export default App