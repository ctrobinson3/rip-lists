import React from 'react'

const dives = ({ entry }) => {
    const displayedDive = entry.map(dive => {
        if (dive.num === 0)
            return <p className='dive-invalid'>Invalid Dive</p>
        else
            return <p className='valid-dive'>{dive.direction} {dive.rotation} {dive.position}, DD: {dive.difficulty}</p>
    })
    return (
        <div className='dive-dive'>
            {displayedDive}
        </div>
    )
}

export default dives



