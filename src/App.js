import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [weight,setWeight] = useState(0)
  const [bottles,setBottles] = useState(0)
  const [time,setTime] = useState(0)
  const [male,setMale] = useState(0)
  const [female,setFemale] = useState(0)
  
  function calculate(e) {
    let litres = bottles*0.33
    let grams = litres * 8 * 4.5
    let burning = weight/10
    let gramsleft = grams - (burning * time)

    const male = gramsleft / (weight*0.7)
    setMale(male)
    const female = gramsleft / (weight*0.6)
    setFemale(female)
  }
  return (
    <form>
      <h3>Alcometer By Ville Koivuneva</h3>
      <div>
        <label>Weight</label>
        <input type="integer" value={weight} onChange={e => setWeight(e.target.value)}/>
      <br />
        <label>Bottles</label> <br />
        <input type="number" value={bottles} onChange={e => setBottles(e.target.value)}/>  
      <br />
        <label>Time (hours)</label> <br />
        <input type="number" value={time} onChange={e => setTime(e.target.value)}/>
      <br />
        <label>Gender </label>
        <select>
          <option value={0.7}>Male</option>
          <option value={0.6}>Female</option>
        </select>
      </div>

      <div>
      <label>Alcometer</label> <br />
      <output>Male: {Number((male).toFixed(2))}</output> <br />
      <output>Female: {Number((female).toFixed(2))}</output>
      </div>
      
      <button type="button" onClick={calculate}>Calculate</button>
    </form>
  );
}

export default App;
