import React from 'react'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const ThirdRound = ({back, dives, onChange, onClick, opt}) => {
  return (
    <div className='page-container'> 
      <div className='eleven-form'>
        <header className='header'>
            <h3 className='h3'>Third Round</h3>
        </header>
        <form className='input-div'>
            {/* Ninth Dive */}
            <label>Ninth Dive:</label>
            <input 
            className='form-input'
            id='d9'
            value={dives.d9}
            onChange={onChange}
            />   
            <input
            type='checkbox'
            value={opt.o9}
            onChange={onClick} 
            id='o9'
            />
           {/* Tenth Dive */}
            <label>Tenth Dive:</label>
            <input
            className='form-input'
            id='d10'
            value={dives.d10}
            onChange={onChange}
            />
            <input
            type='checkbox'
            onChange={onClick}
            value={opt.o10} 
            id='o10'
            />
            {/* Eleventh Dive */}
            <label>Eleventh Dive:</label>
            <input
            className='form-input'
            id='d11'
            value={dives.d11}
            onChange={onChange}
            />
            <input
            type='checkbox'
            id='o11'
            value={opt.o11}
            onChange={onClick}
            />
        </form>
        <div className='eleven-form-buttons'>
        <FaArrowAltCircleLeft
            className='eleven-form-arrow'
            onClick={back}
            />
        </div>
        </div>
    </div>
    
  )
}

export default ThirdRound