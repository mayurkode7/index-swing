import { useState } from 'react'
import './App.css'
import { funds } from "./nifty50.json"

function App() {

  return (
    <>
      <h1>Funds {funds.length}</h1>

      {funds.map(i => <>
        <p>{i.name} |  {i.type}</p>
        <a href={i.link} target='_blank'> Coin</a>
      </>)}
    </>
  )
}

export default App
