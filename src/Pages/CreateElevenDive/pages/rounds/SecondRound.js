import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import { SecondRoundInput } from './ElevenForm'

const SecondRound = ({next, back}) => {
  return (
    <div className='eleven-form'>  
        <header className='eleven-form-header'>
            <h3>Second Round</h3>
        </header>   
        <div className='eleven-form'>
            <SecondRoundInput/>
        </div>   
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
  )
}

export default SecondRound