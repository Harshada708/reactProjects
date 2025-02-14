import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)
  //let counter = 5;
  const addValue = () => {
    //if(counter <20) value will not increament after 20
      counter= counter+1;
      setCounter(counter);
  }
  const removeValue = () =>{
    //if(counter>0) value will not decrease after 0
      setCounter(counter-1);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue}
      >add value</button>
      <br/>
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
