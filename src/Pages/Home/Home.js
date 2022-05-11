import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomeStyle.css'
export default function Home() {
    //set dive count
    const [state, setState] = useState({
        type: '6-dive'
    })
    const { type } = state

    //navigate
    const navigate = useNavigate()

    //actions
    const onSubmit = (e) => {
        e.preventDefault()

        if (type === '6-dive') {
            navigate('/create-six')
        }

        if (type === '11-dive') {
            navigate('/create-eleven')
        }
    }

    const onMutate = e => {
        let boolean = null

        if (e.target.value === 'true') {
            boolean = true
        }
        if (e.target.value === 'false') {
            boolean = false
        }
        setState((prevState) => ({
            ...prevState,
            [e.target.id]: boolean ?? e.target.value
        }))
    }

    return (
        <div className='home-div'>
            <header className='home-header'>
                <h1 className='home-logo'>
                    Rip Lists
                </h1>
                <h1 className='home-head'>Create Dive Card</h1>
            </header>
            <main className='home-main'>
                <form onSubmit={onSubmit}>
                    <h2 className='home-form-header'>
                        Dive Amount:
                    </h2>
                    <div className='home-buttons'>
                        <button
                            type='button'
                            className={type === '6-dive' ? 'home-button-active home-but' : 'form-button home-but'}
                            id='type'
                            value='6-dive'
                            onClick={onMutate}>
                            6 Dive
                        </button>
                        <button
                            type='button'
                            className={type === '11-dive' ? 'home-button-active home-but' : 'form-button home-but'}
                            id='type'
                            value='11-dive'
                            onClick={onMutate}>
                            11 Dive
                        </button>
                    </div>
                    <div className='home-select-div'>
                    <button type='submit' className='form-button home-select'>Select</button>
                    </div>
                </form>
            </main>
        </div>
    )
}
