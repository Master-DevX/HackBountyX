// import { useState } from 'react'
import './App.css'
import Panrtners from './components/ partners/partners'
import Header from './components/header/header'
import Main from './components/home/home'
import Service from './components/services/service'
import Square from './components/square/square'
import Client from './components/client/client'

function App() {

  return (
    <div className='containers'> 
      <Header/>
      <Main />
      <Panrtners />
      <Service />
      <Square />
      <Client />
    </div>
  )
}

export default App
