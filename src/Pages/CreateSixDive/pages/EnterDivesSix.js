import React from 'react'
import DiveCheck from '../../../Components/DiveLists/DiveCheck'
import { diveArrayFunction } from '../../../Components/DiveLists/DiveArray'

const EnterDivesSix = ({ dive, onChange, onSubmit, next, back }) => {
    //deconstruct
    const { d1, d2, d3, d4, d5, d6 } = dive

    //find dives
    const diveCheck = DiveCheck
    const diveArray = diveArrayFunction()
    const findDives = () => {
        const list = [d1, d2, d3, d4, d5, d6]
        const diveList = list.map(a => {
            let d = a.toLowerCase()
            if (diveCheck.includes(d)) {
                const index = diveCheck.indexOf(d)
                const value = diveArray[index]
                return value
            }
            else
                //returns an empty dive
                return diveArray[113]
        })
        //enter dives
        onSubmit(diveList)
        next()
    }


    return (
        <div>
            <h1>Enter Dives</h1>
            <form>
                {/* First Dive */}
                <div className='input-div'>
                    <label className='formLabel'>First Dive</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='d1'
                        value={d1}
                        onChange={onChange}
                    />
                </div>
                {/* Second Dive */}
                <div className='input-div'>
                    <label className='formLabel'>Second Dive</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='d2'
                        value={d2}
                        onChange={onChange}
                    />
                </div>
                {/* Third Dive */}
                <div className='input-div'>
                    <label className='formLabel'>Third Dive</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='d3'
                        value={d3}
                        onChange={onChange}
                    />
                </div>
                {/* Fourth Dive */}
                <div className='input-div'>
                    <label className='formLabel'>Fourth Dive</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='d4'
                        value={d4}
                        onChange={onChange}
                    />
                </div>
                {/* Fifth Dive */}
                <div className='input-div'>
                    <label className='formLabel'>Fifth Dive</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='d5'
                        value={d5}
                        onChange={onChange}
                    />
                </div>
                {/* Sixth Dive */}
                <div className='input-div'>
                    <label className='formLabel'>Sixth Dive</label>
                    <input
                        className='formInputName'
                        type='text'
                        id='d6'
                        value={d6}
                        onChange={onChange}
                    />
                </div>
            </form>
            <button
                type='button'
                className='form-button'
                onClick={findDives}>Next
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

export default EnterDivesSix