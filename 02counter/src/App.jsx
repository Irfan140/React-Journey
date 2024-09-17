import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
let [counter,setCounter] = useState(0) // inside useState instead of 13 we can use any value..these value will go to counter variable as default value...and setCounter will be the method responsible for state change (counter ko change kr na ka responsibility) in the UI

//  let counter = 0;
  const addValue = () => {
    counter++
    setCounter(counter)
    
  }

  const decreaseValue = () => {
    setCounter(counter - 1)
    
  }

  return (
    <>
    <h1>A simple counting project</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <br />
    <button onClick={decreaseValue}>Remove value</button>
    </>
  )
}

export default App
