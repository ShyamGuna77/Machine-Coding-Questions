import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  function increment(){
    setCount(prev => prev+1)
  }
  function decrement () {
    setCount(prev => prev-1)
  }

  function reset(){
    setCount(0)
  }

  return (
    <div>
      <h1>Counter APP</h1>
      <p>count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App
