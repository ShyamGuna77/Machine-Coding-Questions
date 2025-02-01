import {  useReducer } from "react";



const initialState = {current:"0", expression :" " ,overwrite : false, previous :  null , operator : null}

function reducer (state,action) {
  switch (action.type){
    case "ADD_DIGIT":
      if(state.overwrite){
        return {...state, current :action.payload, overwrite:false ,expression:action.payload}
      }

      if(action.payload === "0" && state.current === "0") return state 
      if(action.payload === "." && state.current.includes('.')) return state

      return {
        ...state ,
        current:state.current === "0" ? action.payload : state.current+ action.payload,
        expression : state.current+action.payload
      }

      case "CLEAR" :
        return initialState

      case  "CHOOSE_OPERATOR" :    

      if(state.operator && !state.overwrite){
        return {
          previous: evaluate(state),
          operator: action.payload,
          current : "0",
          expression : state.expression + " " + action.payload + " " ,

        };
      }

      return {
        previous: state.current,
        operator: action.payload,
        current: "0",
        expression: state.expression + " " + action.payload + " ",
      };

      case "CALCULATE" :
      { if(!state.operator ||  !state.previous) return state ;
      const result = evaluate(state);
      return {
        current :result ,
        operator : null,
        overwrite : true ,
        previous : null,
        expression : state.expression + "= " + result
      } }

      default :
      return state ;

  }

}

function evaluate ({current,previous,operator}) {
  const prev = parseFloat(previous)
  const curr = parseFloat(current)
if (isNaN(prev) || isNaN(curr)) return "0";

    let result;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;

    case "-":
      result = prev - curr;
      break;

    case "*":
      result = prev * curr;
      break;

    case "/":
      result = curr !== 0 ? prev / curr : "STG ERROR";
      break;

    case "%":
      result = curr !== 0 ? prev % curr : "STG ERROR";
      break;
      default:
        result = 0;
  }
   return result.toString()
  

}




function App() {

  const [state,dispatch] = useReducer(reducer,initialState) 
  const buttons = [
    "AC",
    "%",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    ".",
    "0",
    "=",
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100">
        <div className="bg-black p-6 rounded-3xl shadow-lg w-80">
          {/* Expression Display */}
          <div className="text-right text-slate-300 text-lg p-2 bg-black rounded-md mb-2">
            {state.expression}
          </div>

          {/* Value Display */}
          <div className="text-right text-3xl p-4 bg-black rounded-md mb-4 text-white">
            {state.current}
          </div>

          {/* Grid for buttons */}
          <div className="grid grid-cols-4 gap-2 ">
            {buttons.map((btn) => (
              <button
                key={btn}
                className={`p-4 rounded-full text-2xl font-semibold ${
                  btn === "AC" || btn === "="
                    ? "bg-gradient-to-r from-[#F74467] to-[#D8345F] text-gray-800"
                    : btn === "%"
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-800 hover:bg-gray-500 text-white"
                } ${btn === "=" ? "col-span-2" : " "} ${
                  btn === "AC" ? "col-span-2" : " "
                }`}
                onClick={() =>
                  btn === "="
                    ? dispatch({ type: "CALCULATE" })
                    : btn === "AC"
                    ? dispatch({ type: "CLEAR" })
                    : ["+", "-", "*", "/", "%"].includes(btn)
                    ? dispatch({ type: "CHOOSE_OPERATOR", payload: btn })
                    : dispatch({ type: "ADD_DIGIT", payload: btn })
                }
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
