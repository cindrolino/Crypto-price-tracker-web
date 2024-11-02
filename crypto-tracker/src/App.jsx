import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Feed from './Components/Feed/Feed'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Tictactoe } from './Pages/tic-tac-toe/tic.tac.toe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Feed></Feed>}></Route>
      <Route path='/xo' element = {<Tictactoe></Tictactoe>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
