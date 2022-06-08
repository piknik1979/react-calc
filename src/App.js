import "./index.css";

function App() {
  return (
    <div className="calculator-grid">
      {/* main calculator grid */}
      <div className="output">
        {" "}
        {/* // main output screen - whole black section and includes prev and curre op.   */}
        <div className="previous-operand">123.124</div>{" "}
        {/* small numbers - previous calculation*/}
        <div className="current-operand">123.124</div>{" "}
        {/* large numbers - previous calculation*/}
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