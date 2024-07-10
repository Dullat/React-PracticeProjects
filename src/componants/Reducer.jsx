import React, { useReducer, useState } from "react"

const Reducer = () => {
  const initialState = {
    name: "name",
  }
  const [name, dispatch] = useReducer(myReducer, initialState)

  const handleChange = (e) => {
    dispatch({ type: "typed", name: e.target.value })
  }

  const handleClick = () => {
    dispatch({ type: "button", name: "removed" })
  }

  function myReducer(state, action) {
    switch (action.type) {
      case "typed":
        return {
          ...state,
          name: action.name,
        }
      case "button":
        return {
          ...state,
          name: "removed",
        }
      default:
        throw new Error("Unknown action type")
    }
  }

  console.log(name, name.type)

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>click here</button>
    </div>
  )
}

export default Reducer
