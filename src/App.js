import DecreaseButton from "./components/DecreaseButton"
import IncreaseButton from "./components/IncreaseButton"
import ResetButton from "./components/ResetButton"
import { useState } from "react"

const App = () => {
  const [value, setValue] = useState(0)

  const decreaseOne = () => {
    // const newValue = value - 1
    setValue(value - 1)
  }

  const increasetOne = () => {
    // const newValue = value + 1
    setValue(value + 1)
  }

  const resetToZero = () => {
    setValue(0)
  }

  return<>
    <h1>Počítadlo</h1>
    <h2>{value}</h2>
    <DecreaseButton decrease={decreaseOne}/>
    <ResetButton reset={resetToZero}/>
    <IncreaseButton increase={increasetOne}/>
  </>
}

export default App