// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard'
import DesktopHeader from './Components/Shared/DesktopHeader'
import TicTacToe from './Components/TicTacToe'

function App() {

  return (
      <div>
        <DesktopHeader />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path='/tictactoe' element={<TicTacToe/>} />
        </Routes>
      </div>
      
  )
}

export default App
