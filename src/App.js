import { useReducer } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
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
      // if (state.overwrite) {
      //   return {
      //     ...state,
      //     currentOperand: payload.digit,
      //     overwrite: false,
      //   };
      // }
      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      } //  if the outpust is zero calculator won't take any action
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        //  if there will be another '.' pressed it wont add it to the state
        return state;
      }

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };
    case ACTIONS.CLEAR:
      return {};
  }
} // reducer function have a state and - type parameter (type of action), also have payload parameter which will be passing all different Actions

// FUNCTION Evaluate is to CALCULATE (evaluate the current Result)

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return "";

  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
  }
  return computation.toString();
}



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

      <button
        className="span-two"
        onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
        AC
      </button>

      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
        DEL
      </button>

      {/* Setting Up Digits - replacing the original buttons with DigitButtons and '.' period button as well  */}
      {/* Setting Up Operation Buttons, as well (/, +. -, *. */}
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
