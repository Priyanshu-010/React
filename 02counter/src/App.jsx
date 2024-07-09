import { useState } from 'react'


function App() {
  let [counter, setCounter] = useState(5)
  // let counter = 5;

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter)
    console.log("value added", counter);
  }

  const removeValue = () => {
    counter === 0 ? setCounter(0) :
      setCounter(counter - 1)
  }
  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
