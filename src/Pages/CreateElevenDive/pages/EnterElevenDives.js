import React from 'react'
import RoundIndex from './rounds/RoundIndex'

const EnterElevenDives = ({dive, onChange, onSubmit, changeOpt, next, back}) => {
  return (
    <div className='eleven-container'>
        <header className = 'eleven-head'>
            <h1>Enter Eleven Dives</h1>
        </header>
        <div className='eleven-div'>
            <RoundIndex
                dive={dive}
            />
        </div>
    </div>
  )
}

export default EnterElevenDives