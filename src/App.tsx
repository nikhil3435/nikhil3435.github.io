// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Dashboard'
import DesktopHeader from './Components/Shared/DesktopHeader'
import TicTacToe from './Components/TicTacToe'
import Chess from './Components/Chess'
import Loaders from './Components/Loaders'

function App() {

  return (
      <div>
        <DesktopHeader />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path='/tictactoe' element={<TicTacToe/>} />
          <Route path='/chess' element={<Chess/>} />
          <Route path="/loaders" element={<Loaders/>} />
        </Routes>
      </div>
      
  )
}

export default App
