import { useState } from "react"
function Test() {
    //state - або внутрішній стан компонента (або взагалі застосунку)
    // стейт це дві частини - 1)значення 2)функція яка змінює це значення
    let [x, setX] = useState(0)
  return (
    <div>
      <button
        onClick={() => {
         setX(++x)
        }}
      >
        -
      </button>
      <span>{x}</span>
      <button
        onClick={() => {
          setX(++x)
        }}
      >
        +
      </button>
    </div>
  )
}

export default Test
