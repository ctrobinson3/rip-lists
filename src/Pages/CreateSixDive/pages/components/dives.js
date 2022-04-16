import React from 'react'

const dives = ({ entry }) => {
    var repeatDives = false


    function checkValidity(d, i) {
        const list = entry.map(dive => {
            return dive.num
        })
        list.splice(i, 1)
        if (list.includes(d)) {
            repeatDives = true
            return 'dive-invalid'
        }
        else
            return 'dive-valid'
    }

    const displayedDive = entry.map((dive, i) => {
        if (dive.num === 0)
            return <p className='dive-invalid' key={i}>Invalid Dive</p >

        else
            return <p className={checkValidity(dive.num, i)} key={i}>{i + 1}: {dive.direction} {dive.rotation} {dive.position}, DD: {dive.difficulty}</p>
    })

    function errors() {
        if (repeatDives = true)
            return
        <p>Dives are repeated</p>
    }



    return (
        <>
            <div className='dive-display__header'>
                hey
            </div>
            <div className='dive-display'>
                {displayedDive}
            </div>
        </>

    )
}

export default dives



