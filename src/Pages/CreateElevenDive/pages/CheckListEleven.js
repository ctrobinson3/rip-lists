import React from 'react'
import Dives from './components/Dives'

const CheckListEleven = ({next, back}) => {
  return (
    <div className='page-container'>
      <h1 className='header'>List Check</h1>

      <Dives/>

      <button
                type='button'
                className='form-button next'
                onClick={next}>
                Submit
            </button>
            <button
                type='button'
                className='form-button back'
                onClick={back}>
                Back
            </button>
    </div>
  )
}

export default CheckListEleven