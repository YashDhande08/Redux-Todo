
import { AddTodo } from "./features/AddTodo"
import { useState } from "react"


function App() {
  
  const [lightMode, setLightMode] = useState(true);
  return (
    <>
       <div className={lightMode ? "bg-white text-black min-h-screen" : "bg-black text-white min-h-screen"}>
      <button
        onClick={() => setLightMode(!lightMode)}
        className="p-2 border py-2 rounded m-4 "
      >
        {lightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>

      <AddTodo lightMode={lightMode}/>
    </div>  
    </>
  )
}

export default App
