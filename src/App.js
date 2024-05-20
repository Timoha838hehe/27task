import "./App.css"
import { Button, TextField } from "@mui/material"
import Paper from "@mui/material/Paper"
import TODO from "./components/todo/TODO"
import Test from "./components/todo/testComponent/Test"
import { useState, useRef } from "react"
//ref - reference
function App() {
  let [list, setList] = useState([])
  const input = useRef(null)

  function newTodo() {
    const newList = [...list]
    console.log(input.current)
    newList.push()
    setList(newList)
  }
  return (
    <div className="App">
      <h1>Список справ</h1>
      <Paper
        sx={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
        elevation={8}
      >
        <TextField
          ref={input}
          sx={{ margin: "20px" }}
          id="outlined-basic"
          label="Им'я справи"
          variant="outlined"
        />
        <Button onClick={newTodo} variant="contained">
          Нова справа
        </Button>
      </Paper>
      {list.map((el) => {
        return <TODO key={el.id} list={el} />
      })}
      <Test />
    </div>
  )
}

export default App

