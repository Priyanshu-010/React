import { useEffect, useState } from 'react'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  const HandleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    document.title = count
  }, [count])


  return (
    <>
      <Button HandleClick={HandleClick} text="CLick me">
        <h1>{count}</h1>
      </Button>
    </>
  )
}

export default App
