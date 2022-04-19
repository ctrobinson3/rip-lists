import React from 'react'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import { ThirdRoundInput } from './ElevenForm'

const ThirdRound = ({back}) => {
  return (
    <div className='eleven-form'> 
        <header className='eleven-form-header'>
            <h3>Third Round</h3>
        </header>
        <div className='eleven-form'>
            <ThirdRoundInput/>
        </div>
        <div className='eleven-form-buttons'>
        <FaArrowAltCircleLeft
            className='eleven-form-arrow'
            onClick={back}
            />
        </div>
    </div>
    
  )
}

export default ThirdRound