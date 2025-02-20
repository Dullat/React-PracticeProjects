import { useEffect, useState } from "react"
import Cell from "./componants/Cell"

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setgo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState(null)

  const message = "it is now " + go + "'s turn"

  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle")
      if (circleWins) {
        setWinningMessage("circle winns")
        return
      }
    })

    winningCombos.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "cross")
      if (circleWins) {
        setWinningMessage("cross winns")
        return
      }
    })
  }

  useEffect(() => {
    checkScore()
  }, [cells])

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setgo={setgo}
            cells={cells}
            setCells={setCells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  )
}

export default App
