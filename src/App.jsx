import { useState } from 'react'
import './App.css'
import Weather from './weather'


function App() {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  return (
    <>
      <div>
        <h1> Hello Sluts! It is now {now.toString()}</h1>
        <Weather />
      </div>
    </>
  )
}

export default App
