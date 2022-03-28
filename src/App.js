
import './App.css';

function App() {
  return (
   
    <div className="container">

      <div className="calculator">

          <input type="text" className="calc-numbers" value="0"/>

          <div className="calculator-buttons">
              <button className="btn is-clear span-2 orange operator">C</button>
              <button className="btn orange operator">&larr;</button>
              <button className="btn orange operator">&divide;</button>
              <button className="btn">7</button>
              <button className="btn">8</button>
              <button className="btn">9</button>
              <button className="btn orange operator">x</button>
              <button className="btn">4</button>
              <button className="btn">5</button>
              <button className="btn">6</button>
              <button className="btn orange">-</button>
              <button className="btn">1</button>
              <button className="btn">2</button>
              <button className="btn">3</button>
              <button className="btn orange operator">+</button>
              <button className="btn span-3">0</button>
              <button className="btn orange operator">=</button>
              
          </div>
    
      </div>

    </div>
  );
}

export default App;
