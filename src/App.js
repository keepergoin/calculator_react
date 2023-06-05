import { useState } from 'react';
import './index.css';

const App = () => {

  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = (numberOrOperator) => {
    setOperation(operation.concat(numberOrOperator.target.id))
  }

  const handleResult = () => {
    try {
      setResult(eval(operation).toString())
    } catch (error) {
      setResult("ERROR")
    }
  }

  const handleAllClear = () => {
    setOperation("");
    setResult(0);
  }

  const handleDelete = () => {
    setOperation(operation.slice(0, -1))
  }

  return ( 
    <div class="calculator-grid">
      <div class="screen">
        <div id="operation">{ operation }</div>
        <div id="result">{ result }</div>
      </div>
      <button class="span-two" onClick={ handleAllClear }>AC</button>
      <button onClick={ handleDelete }>DEL</button>
      <button id="/" onClick={ handleOperation }>/</button>
      <button id="7" onClick={ handleOperation }>7</button>
      <button id="8" onClick={ handleOperation }>8</button>
      <button id="9" onClick={ handleOperation }>9</button>
      <button id="*" onClick={ handleOperation }>*</button>
      <button id="4" onClick={ handleOperation }>4</button>
      <button id="5" onClick={ handleOperation }>5</button>
      <button id="6" onClick={ handleOperation }>6</button>
      <button id="+" onClick={ handleOperation }>+</button>
      <button id="1" onClick={ handleOperation }>1</button>
      <button id="2" onClick={ handleOperation }>2</button>
      <button id="3" onClick={ handleOperation }>3</button>
      <button id="-" onClick={ handleOperation }>-</button>
      <button id="." onClick={ handleOperation }>.</button>
      <button id="0" onClick={ handleOperation }>0</button>
      <button class="span-two" onClick={ handleResult }>=</button>
    </div>
  );
}
 
export default App

