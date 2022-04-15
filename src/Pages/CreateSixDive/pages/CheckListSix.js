import React, { useState } from 'react'
import Dives from './components/dives'



const CheckListSix = ({ next, back, entry }) => {
    // const allDives = [...new Set(entry.map())]
    // const [display, setDisplay] = useState(allDives)



    return (
        <div>
            <h1>List Check</h1>

            <Dives
                entry={entry}
            />

            <button
                type='button'
                className='form-button'
                onClick={next}>
                Submit
            </button>
            <button
                type='button'
                className='form-button'
                onClick={back}>
                Back
            </button>
        </div>
    )
}

export default CheckListSix