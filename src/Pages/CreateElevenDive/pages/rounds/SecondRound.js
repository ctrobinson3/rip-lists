import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa'
import {FaArrowAltCircleLeft} from 'react-icons/fa'

const SecondRound = ({next, back, dives, onChange, onClick, opt}) => {
  return (
    <div className='page-container'>  
    <div className='eleven-form'>
        <header className='header'>
            <h3 className='h3'>Second Round</h3>
        </header>   
        <form className='input-div'>
            {/* Sixth Dive */}
            <label>Sixth Dive:</label>
            <input 
            className='form-input'
            id='d6'
            value={dives.d6}
            onChange={onChange}
            />   
            <input
            type='checkbox'
            value={opt.o6}
            onChange={onClick} 
            id='o6'
            />
           {/* Seventh Dive */}
            <label>Seventh Dive:</label>
            <input
            className='form-input'
            id='d7'
            value={dives.d7}
            onChange={onChange}
            />
            <input
            type='checkbox'
            onChange={onClick}
            value={opt.o7} 
            id='o7'
            />
            {/* Eighth Dive */}
            <label>Eighth Dive:</label>
            <input
            className='form-input'
            id='d8'
            value={dives.d8}
            onChange={onChange}
            />
            <input
            type='checkbox'
            id='o8'
            value={opt.o8}
            onChange={onClick}
            />
        </form>   
            <div className='eleven-form-buttons'>
                <FaArrowAltCircleLeft
                className='eleven-form-arrow'
                onClick={back}
                />
                <FaArrowAltCircleRight
                className='eleven-form-arrow'
                onClick={next}
                />            
        </div>
        </div>
    </div>
  )
}

export default SecondRound