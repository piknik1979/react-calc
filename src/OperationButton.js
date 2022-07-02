import { ACTIONS } from "./App"; // importing ACTIONS from the app.js

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      } // when button is clicked - the ACTION is taken (in this case ADD_DIGIT will MAKE AN OPERATION)
    >
      {operation}
    </button>
  );
}
