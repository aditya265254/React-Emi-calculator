import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <div className='max-w-7xl mx-auto  '>
      <Nav/>
      <div className='pt-10 px-6'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/calculator' element={<Calculator/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App