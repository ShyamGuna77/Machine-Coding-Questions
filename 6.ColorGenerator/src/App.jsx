

import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState('');
  const[error,setError]=useState(false);
  const[list,setList] = useState(new Values("#3457D5").all(10));



  function handleSubmit(e) {
    e.preventDefault();
 
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      
    } catch (error) {
      setError(true);
      console.log(error);
      
    }
  }
  return (
    <>
      <section className="container">
    
        <h3>color generator</h3>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            value={color}
            placeholder="#3457D5"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Enter
          </button>
        </form>
         
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;