import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import TaskApp from "./componants/Reducer.jsx"
import DarkMode from "./componants/DarkMode.jsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TaskApp /> */}
    <DarkMode />
  </React.StrictMode>
)
