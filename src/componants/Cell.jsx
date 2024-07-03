const Cell = ({ id, cell, go, setgo, cells, setCells, winningMessage }) => {
  const handleClick = (e) => {
    const cellElement = e.currentTarget.firstChild

    if (!winningMessage) {
      const isCircle = cellElement.classList.contains("circle")
      const isCross = cellElement.classList.contains("cross")

      if (!isCircle && !isCross) {
        if (go === "circle") {
          cellElement.classList.add("circle")
          setgo("cross")
          handleCellChange("circle")
        } else if (go === "cross") {
          cellElement.classList.add("cross")
          setgo("circle")
          handleCellChange("cross")
        }
      }
    }
  }

  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className
      } else {
        return cell
      }
    })
    setCells(nextCells)
  }

  console.log(cells)
  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  )
}

export default Cell
