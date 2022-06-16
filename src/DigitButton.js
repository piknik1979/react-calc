import { ACTIONS } from './App'  // importing ACTIONS from the app.js

export default function DigitButton ({ dispatch, digit }) {
    return <button onClick={ () => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit} })} // when button is clicked - the ACTION is taken (in this case ADD_DIGIT will add digit)
    > 
        {digit}
    </button>
}