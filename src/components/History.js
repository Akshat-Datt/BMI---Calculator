import React from 'react'

function History(props) {
  return (
    <div>
      {
        props.historyArray.map(function(entry){
          return <div className='box'>
          <div className='col'>
              <p className='ptag' id='name'>Name: {entry.name}</p>
              <p className='ptag' id='height'>Entered Height in cm = {entry.height}</p>
              <p className='ptag' id='weight'>Entered Weight in kg = {entry.weight}</p>
            </div>
            <div className='row'>
              <p className='ptag' id='bmi'>BMI</p><p className='ptag' id='bmi'>{entry.bmi}</p>
            </div>
          </div>
          
          
        })
      }
    </div>
  )
}

export default History