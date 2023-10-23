import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/Navbar/Navbar"
import Titulo from './components/Titulo/Titulo'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const greeting = "Bienvenidos a Casacashowroom"

  return (
    <>
      <NavBar/>
      <Titulo mensaje={greeting}/>
    </>
  )
}

export default App

