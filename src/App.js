import DecreaseButton from "./components/DecreaseButton"
import { useState } from "react"

const App = () => {
  const [value, setValue] = useState(0)

  const decreaseOne = () => {
    const newValue = value - 1
    setValue(newValue)
  }

  return<>
    <h1>Počítadlo</h1>
    <h2>{value}</h2>
    <DecreaseButton decrease={decreaseOne}/>
  </>
}

export default App