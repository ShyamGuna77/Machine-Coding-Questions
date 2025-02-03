
import { useState } from "react"
import Datepicker from "./Datepicker"
function App() {
  
  const [value,setvalue] = useState(new Date())

  return (
    <>
     <div>
      <Datepicker value={value}  onChange ={setvalue} />
     </div>
    </>
  )
}

export default App
