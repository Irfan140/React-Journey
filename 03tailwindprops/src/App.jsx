import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  /*
  let myObj = {
  username: "irfan",
  age: 20
 }

  */
 
 let newArr = [1,2,3]

  return (
    <>
    <h1 className='bg-green-400 mb-4 '>Tailwind Test</h1>
    <Card username="chaiurirfan" btnText='clicked me' />
    <Card username="mehmud" />
    </>
  )
}

export default App
