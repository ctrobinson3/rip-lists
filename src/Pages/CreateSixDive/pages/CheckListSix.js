import React from 'react'
import Dives from './components/dives'


const CheckListSix = ({ next, back, entry }) => {
    // const allDives = [...new Set(entry.map())]
    // const [display, setDisplay] = useState(allDives)



    return (
        <div className='six-container'>
            <h1 className='header'>List Check</h1>

            <Dives
                entry={entry}
            />

            <button
                type='button'
                className='form-button next'
                onClick={next}>
                Submit
            </button>
            <button
                type='button'
                className='form-button back'
                onClick={back}>
                Back
            </button>
        </div>
    )
}

export default CheckListSix