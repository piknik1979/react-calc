import { useReducer } from "react";
import DigitButton from "./DigitButton";
import "./index.css";

// actions will be taken when pressing the buttons
export const ACTIONS = {
  ADD_DIGIT: "add-digit", // adding a single digit to the Grid
  CHOOSE_OPERATION: "choose-operation", // choosing a operation like division etc
  CLEAR: "clear", //clear digits
  DELETE_DIGIT: "delete-digit", //removeing the digit
  EVALUATE: "evaluate",
};

//reducer function will reduce and calculate
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
  }
} // reducer function have a state and - type parameter (type of action), also have payload parameter which will be passing all different Actions

function App() {
  // setting states - currentOperand, previousOperand, operation
  //using useReducer method from React
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        {/* instead of default numbers in a previous-operand we put there state: {previousOperand} and {operation} which will be the actual operation ?? */}
        <div className="previous-operand">
          {previousOperand} {operation}{" "}
        </div>{" "}
        {/* instead of default numbers in a current-operand we put there state: {current-Operand} */}
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <DigitButton digit="/" dispatch={dispatch} />
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
