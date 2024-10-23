import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Feed from './Components/Feed/Feed'
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Sidebar/>
     <Feed></Feed>
    </>
  )
}

export default App
