import { useState } from 'react'


function App() {

  const username = "Aves F"
  
  const userStyles = {
    backgroundColor: "green",
    color: "white"
  }

  return (
    <h1 style = {userStyles}>Welcome, {username}</h1>
  )
}

export default App
