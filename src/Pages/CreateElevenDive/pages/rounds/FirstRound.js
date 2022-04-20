import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa'

const FirstRound = ({next, dives, onChange, onClick, opt}) => {

  return (
    <div className='page-container'>
      <div className='eleven-form'>
        <header className='header'>
            <h3 className='h3'>First Round</h3>
        </header>
          <form className='input-div'>
          {/* First Dive */}
            <label>First Dive:</label>
            <input 
            className='form-input'
            id='d1'
            value={dives.d1}
            onChange={onChange}
            />   
            <input
            type='checkbox'
            value={opt.o1}
            onChange={onClick} 
            id='o1'
            />
           {/* Second Dive */}
            <label>Second Dive:</label>
            <input
            className='form-input'
            id='d2'
            value={dives.d2}
            onChange={onChange}
            />
            <input
            type='checkbox'
            onChange={onClick} 
            value={opt.o2}
            id='o2'
            />
            {/* Third Dive */}
            <label>Third Dive:</label>
            <input
            className='form-input'
            id='d3'
            value={dives.d3}
            onChange={onChange}
            />
            <input
            type='checkbox'
            id='o3'
            value={opt.o3}
            onChange={onClick}
            />
            {/* Fourth Dive */}
            <label>Fourth Dive:</label>
            <input
            className='form-input'
            id='d4'
            value={dives.d4}
            onChange={onChange}
            />
            <input
            type='checkbox'
            id='o4'
            value={opt.o4}
            onChange={onClick}
            />
            {/* Fifth Dive */}
            <label>Fifth Dive:</label>
            <input
            className='form-input'
            id='d5'
            value={dives.d5}
            onChange={onChange}
            />
            <input
            type='checkbox'
            id='o5'
            value={opt.o5}
            onChange={onClick}
            />
            </form>
        <div className='eleven-form-buttons'>
            <FaArrowAltCircleRight
            className='eleven-form-arrow'
            onClick={next}
            />
        </div>
        </div>
    </div>
  )
}

export default FirstRound