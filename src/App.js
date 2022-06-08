
function App() {
  return (
    <div className="calculator-grid">   {/* main calculator grid */}
      <div className="output">           {/* // main output screen - whole black section and includes prev and curre op.   */}  
        <div className="previous-operand"></div> 
        <div className="current-operand"></div>  
      </div>
      <button className="span-two">AC</button>  
      <button className="DEL">DEL</button>  
      <button className="all-clear">/</button>  
      <button className="all-clear">1</button>  
      <button className="all-clear">2</button>  
      <button className="all-clear">3</button>  
      <button className="all-clear">*</button>  
      <button className="all-clear">4</button>  
      <button className="all-clear">5</button>  
      <button className="all-clear">6</button>  
      <button className="all-clear">+</button>  
      <button className="all-clear">7</button>  
      <button className="all-clear">8</button>  
      <button className="all-clear">9</button>  
      <button className="all-clear">-</button>  
      <button className="all-clear">.</button>  
      <button className="all-clear">0</button>  
      <button className="span-two">=</button>  
   </div> 
  );
};

export default App;
