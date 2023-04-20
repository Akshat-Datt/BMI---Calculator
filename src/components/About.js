import React from 'react'
import BMI from './BMI.png'

function About() {
  return (
    <div className='section'>
      <h2 className='center'>BMI (Body Mass Index) - CALCULATOR</h2>
      <p className='text'>Is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m2, resulting from mass in kilograms and height in metres. The BMI may be determined using a table or chart which displays BMI as a function of mass and height using contour lines or colours for different BMI categories, and which may use other units of measurement (converted to metric units for the calculation).

      The BMI is a convenient rule of thumb used to broadly categorize a person as underweight, normal weight, overweight, or obese based on tissue mass (muscle, fat, and bone) and height. Major adult BMI classifications are underweight (under 18.5 kg/m2), normal weight (18.5 to 24.9), overweight (25 to 29.9), and obese (30 or more).[1] When used to predict an individual's health, rather than as a statistical measurement for groups, the BMI has limitations that can make it less useful than some of the alternatives, especially when applied to individuals with abdominal obesity, short stature, or unusually high muscle mass.</p>

      <p className='text'>This application makes the calculation easy, with a personalised experience, and stores the history as well to keep a record of the calculated BMI's.</p>

      <img className='logo' src={BMI} alt='BMI'/>
    </div>
  )
}

export default About