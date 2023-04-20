import React, {useState, useEffect} from 'react'
import Progressbar from './Progressbar'
import BMI from './BMI.png'

function Home(props) {

    const [name, setName] = useState('');
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [bmical, setBmical] = useState('')
    const [first, setFirst] = useState('')
    const [message, setMessage] = useState('')
    useEffect(() => {
      
        console.log("Heloo");
        if(height > 0 && weight > 0) {

          let result = (weight / (height * height)) * 10000
         setBmical(result.toFixed(2).toString())

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
          
          if(bmical <= 18.40) {
            setMessage('You are not in a healthy weight range')
          }
          else if((bmical >= 18.40) && (bmical <= 24.9)) {
            setMessage('You are in a healthy weight range');
          }
          else if(bmical >= 25.00) {
            setMessage('You are not in a healthy weight range')
          }
        }

        
    }, [height, weight, bmical]);
    let calci = (event) => {
  
      event.preventDefault()
      if((weight === 0) || (height === 0)) {
        alert('Please enter the required value')
      }
      else {
        // let result = (weight / (height * height)) * 10000
        // setBmical(result.toFixed(2).toString())
        const newEntry = {
          name : name,
          height: height,
          weight : weight,
          bmi: bmical,
        }
        console.log(newEntry);
        props.setHistoryArray([...props.historyArray, newEntry]);
      }
    }

  return (
    <div className='Block'>
      <div className='style'>
        <h2 className='center'>BMI CALCULATOR</h2>
        <img className='big' src={BMI} alt="BMI"/>
      </div>
      <div className='container'>
        <form onSubmit={calci} className='formed'>
          <div className='element'>
          <p>
            <label>Enter your first name:</label>
            <input value={name} onChange={(event) => setName(event.target.value)} Name={name}></input>
          </p>
            <p>
              <label>Enter your height in cm:</label>
              <input value={height} onChange={(event) => setHeight(event.target.value)} ></input>
            </p>
          </div>
          <div className='element'>
          <p>
            <label>Enter your weight in kg:</label>
              <input value={weight} onChange={(event) => setWeight(event.target.value)} ></input>
              </p>
          </div>
          
          <div>
            <center><button className='btn btn-warning' id='bton' type='submit'>SAVE TO HISTORY</button></center>
          </div>
        </form>
        <div className='center'>
          <h3>{name} Your BMI is = {bmical}</h3>
          <p>{first}</p>
          <p>{message}</p>
          <Progressbar value={bmical}></Progressbar>
        </div>
      </div>
      </div>
  )
}

export default Home