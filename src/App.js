import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0)
  const [summary,setSummary] = useState(0)
  
  function calculate(e) {
    const conversion = weight / (height * height)
    setSummary(conversion)
  }

  return (
    <form>
      <h3>Calculating body mass index</h3>
      <div>
        <label>Height</label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)}/>
      </div>

      <div>
        <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)}/> <br/>
      
      <label>BMI </label>
      <output>{summary}</output>
      </div>

      <button type="button" onClick={calculate}>Calculate</button>
    </form>
  );
}

export default App;
