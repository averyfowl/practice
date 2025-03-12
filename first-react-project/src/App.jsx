import { useState } from 'react'


function App() {
  
  const username = "John Doe"
  const userStyles = {
    backgroundColor : "blue",
    color : "white"
  }

  return (
    <h1 style = {userStyles}> Welcome, {username}</h1>
  )
}

export default App
