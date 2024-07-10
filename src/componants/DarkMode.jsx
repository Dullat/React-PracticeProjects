import React, { useState } from "react"
import "./darkmode.css"
import { Toggle } from "./Toggle"

const DarkMode = () => {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <h1 className="title">Hello world!</h1>
      <div className="box">
        <h2>This is a box</h2>
      </div>
    </div>
  )
}

export default DarkMode
