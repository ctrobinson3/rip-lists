import React from 'react'

const DiveCardSix = ({ back }) => {
    return (
        <div>
            <h1>Dive Card</h1>
            <button
                type='button'
                className='form-button'
                onClick={back}>
                Back
            </button>
        </div>
    )
}

export default DiveCardSix