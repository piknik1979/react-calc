import { useReducer } from "react";
import "./index.css";

// actions will be taken when pressing the buttons
// const ACTIONS = {

// }

//reducer function will reduce and calculate 
function reducer(state, action) {

}

function App() {
  // setting states - currentOperand, previousOperand, operation
  //using useReducer method from React
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calculator-grid">
      <div className="output">
    {/* instead of default numbers in a previous-operand we put there state: {previousOperand} and {operation} which will be the actual operation ?? */}
        <div className="previous-operand">{previousOperand} {operation} </div>{" "}
           {/* instead of default numbers in a current-operand we put there state: {current-Operand} */}
        <div className="current-operand">{currentOperand}</div>{" "}

      </div>
      <button className="span-two">AC</button>
      <button className="DEL">DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;

// // minuta 7.43
// https://www.youtube.com/watch?v=DgRrrOt0Vr8&ab_channel=WebDevSimplified