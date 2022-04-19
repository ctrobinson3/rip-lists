import React from 'react'
import {FaArrowAltCircleRight} from 'react-icons/fa'
import {  FirstRoundInput } from './ElevenForm'

const FirstRound = ({next, dive}) => {
  return (
    <div className='eleven-form'>
        <header className='eleven-form-header'>
            <h3>First Round</h3>
        </header>
        <div className='eleven-form'>
            <FirstRoundInput
            dive={dive}
            />
        </div>
        <div className='eleven-form-buttons'>
            <FaArrowAltCircleRight
            className='eleven-form-arrow'
            onClick={next}
            />
        </div>
    </div>
  )
}

export default FirstRound