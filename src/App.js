import React, {useState} from 'react'
import './index.css'


function App() {
  
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [first, setFirst] = useState('')
  const [message, setMessage] = useState('')

  let calci = (event) => {
    event.preventDefault()
    if((weight === 0) || (height === 0)) {
      alert('Please enter the required value')
    }
    else {
      let bmi = (weight / (height * height)) * 10000
      setBmi(bmi.toFixed(2))

      if((height >= 140) && (height <= 141)) {
        setFirst('Your suggested weight range is between 28.5 - 34.9')
      }
      else if((height >= 142) && (height <= 144)) {
        setFirst('Your suggested weight range is between 30.8 - 38.1')
      }
      else if((height >= 145) && (height <= 146)) {
        setFirst('Your suggested weight range is between 32.6 - 39.9')
      }
      else if((height >= 147) && (height <= 149)) {
        setFirst('Your suggested weight range is between 34.9 - 42.6')
      }
      else if((height >= 150) && (height <= 151)) {
        setFirst('Your suggested weight range is between 36.4 - 44.9')
      }
      else if((height >= 152) && (height <= 156)) {
        setFirst('Your suggested weight range is between 39 - 47.6')
      }
      else if((height >= 157) && (height <= 159)) {
        setFirst('Your suggested weight range is between 40.8 - 49.9')
      }
      else if((height >= 160) && (height <= 162)) {
        setFirst('Your suggested weight range is between 43.1 - 52.6')
      }
      else if((height >= 163) && (height <= 164)) {
        setFirst('Your suggested weight range is between 44.9 - 54.9')
      }
      else if((height >= 165) && (height <= 167)) {
        setFirst('Your suggested weight range is between 47.2 - 57.6')
      }
      else if((height >= 165) && (height <= 167)) {
        setFirst('Your suggested weight range is between 49 - 59.9')
      }
      else if((height >= 168) && (height <= 169)) {
        setFirst('Your suggested weight range is between 51.2 - 62.6')
      }
      else if((height >= 170) && (height <= 172)) {
        setFirst('Your suggested weight range is between 53 - 64.8')
      }
      else if((height >= 173) && (height <= 174)) {
        setFirst('Your suggested weight range is between 55.3 - 67.6')
      }
      else if((height >= 175) && (height <= 177)) {
        setFirst('Your suggested weight range is between 57.1 - 69.8')
      }
      else if((height >= 178) && (height <= 179)) {
        setFirst('Your suggested weight range is between 59.4 - 72.6')
      }
      else if((height >= 180) && (height <= 183)) {
        setFirst('Your suggested weight range is between 61.2 - 77.5')
      }

      if(bmi <= 18.40) {
        setMessage('You are not in a healthy weight range')
      }
      else if((bmi >= 18.40) && (bmi <= 24.9)) {
        setMessage('You are in a healthy weight range')
      }
      else if(bmi >= 25.00) {
        setMessage('You are not in a healthy weight range')
      }
    }
  }

  return (
    <div className='App'>
      <div className='style'>
        <h2 className='center'>BMI Calculator</h2>
      </div>
      <div className='container'>
        <form onSubmit={calci}>
          <div>
            <label>Enter your height in cm:</label>
            <div>
              <input value={height} onChange={(event) => setHeight(event.target.value)} ></input>
            </div>
          </div>
          <div>
            <label>Enter your weight in kg:</label>
            <div>
              <input value={weight} onChange={(event) => setWeight(event.target.value)} ></input>
            </div>
          </div>
          <div>
            <center><button className='btn' type='submit'>Submit</button></center>
          </div>
        </form>
        <div className='center'>
          <h3>Your BMI is {bmi}</h3>
          <p>{first}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}


export default App;
