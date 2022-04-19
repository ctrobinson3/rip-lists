import React from 'react'

export const FirstRoundInput = ({ dive }) => {
    console.log(dive)

  return (
    <div className='eleven-info-div'>
        <input
            className='formInputName '
            type='text'
            id='d1'
            placeholder='(#)'
        />
    </div>
  )
}

export const SecondRoundInput = ({ dive, onChange, onSubmit, changeOpt }) => {
    return (
        <div className='eleven-info-div'>
            second
        </div>
    )
}

export const ThirdRoundInput = ({ dive, onChange, onSubmit, changeOpt }) => {
    return (
        <div className='eleven-info-div'>
            third
        </div>
    )
}

