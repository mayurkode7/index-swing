import { useState } from 'react'
import './App.css'
import { nifty50 } from "./nifty50.json"

function App() {

  return (
    <>
      <h1>NIFTY 50 Funds {nifty50.length}</h1>

      {nifty50.map(i => <>
        <p>{i.name} |  {i.type}</p>
        <a href={i.link} target='_blank'> Coin</a>
      </>)}
    </>
  )
}

export default App
