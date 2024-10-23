import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Feed from './Components/Feed/Feed'
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css'
function App() {

  const Header = () =>{
    return(
      <>
      <header>
        <Navbar/>
      </header>
      </>
  
    );
  };

  const MainContent = () =>{
    return(
      <main>
        <Sidebar/>
        <Feed/>
      </main>
    );
  };

  return (
    <>
     <Header/>
     <MainContent></MainContent>
    </>
  )
}

export default App
