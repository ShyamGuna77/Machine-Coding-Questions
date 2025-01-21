import Question from "./Question"

function App() {


  return (
   <div className= "flex flex-col items-center justify-center min-h-screen bg-cyan-200">
      <h1 className="font-bold text-black text-3xl">Accordion</h1>
      <div>
      <Question />
      </div>
   </div>
  )
}

export default App
