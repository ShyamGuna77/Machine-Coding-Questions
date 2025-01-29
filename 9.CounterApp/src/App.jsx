import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(()=>{
    const storedCount = localStorage.getItem("count")
    return storedCount ? JSON.parse(storedCount): 0;
  })

  function increment(){
    setCount(prev => prev+1)
  }
  function decrement () {
    setCount(prev => prev-1)
  }

  function reset(){
    setCount(0);
  }
  useEffect(() => {
    localStorage.setItem("count",JSON.stringify(count))
  },[count])




  return (
    <div>
      <h1>Counter APP</h1>
      <p>count : {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setCount(count+2)}>Double</button>
    </div>
  );
}

export default App
