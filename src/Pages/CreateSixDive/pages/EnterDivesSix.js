import React, { useState } from 'react'
import DiveCheck from '../../../Components/DiveLists/DiveCheck'
import { diveArrayFunction } from '../../../Components/DiveLists/DiveArray'
import DiveModal from './components/DiveModal'
import RulesModal from './components/RulesModal'

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

    //modals
    const [openDiveModal, setOpenDiveModal] = useState(false)
    const [openRulesModal, setOpenRulesModal] = useState(false)


    return (
        <div className='six-enter-dives'>
            <h1>Enter Dives</h1>
            {/* Rules modal */}
            <button
                type='button'
                className='modal-button'
                onClick={() => {
                    setOpenRulesModal(true)
                }}
            >Rules</button>
            {openRulesModal && <RulesModal closeRulesModal = {setOpenRulesModal} />}
            {/* Dives Modal */}
            <button
                type='button'
                className='modal-button'
                onClick={() => {
                    setOpenDiveModal(true)
                }}
            >Dives</button>
            {openDiveModal && <DiveModal closeDiveModal = {setOpenDiveModal} />}
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

            {/* butttons */}
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