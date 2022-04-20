import React from 'react'

const DiverInfoSix = ({ info, onChange, next }) => {
    return (
        <div className='page-container'>
            <h1 className='header'>Diver Info</h1>
            <form className='six-form'>
                {/* Diver Name */}
                <div className='input-div'>
                    <label htmlFor="name" className='form-label'>Diver's Name</label>
                    <input
                        className='form-input'
                        id='name'
                        type='text'
                        value={info.name}
                        onChange={onChange}
                    />
                </div>
                {/* Team */}
                <div className='input-div'>
                    <label className='form-label'>Team</label>
                    <input
                        className='form-input'
                        type='text'
                        id='team'
                        value={info.team}
                        onChange={onChange}
                    />
                </div>
                {/* Coach */}
                <div className='input-div'>
                    <label className='form-label'>Coach's Name</label>
                    <input
                        className='form-input'
                        type='text'
                        id='coach'
                        value={info.coach}
                        onChange={onChange}
                    />
                </div>
                {/* Meet */}
                <div className='input-div'>
                    <label className='form-label'>Meet Name</label>
                    <input
                        className='form-input'
                        type='text'
                        id='meet'
                        value={info.meet}
                        onChange={onChange}
                    />
                </div>
                {/* Date */}
                <div className='input-div'>
                    <label className='form-label'>Date</label>
                    <input
                        className='form-input'
                        type='text'
                        id='date'
                        value={info.date}
                        onChange={onChange}
                    />
                </div>
            </form>
            <button
                type='button'
                className='form-button next'
                onClick={next}>
                Next
            </button>
        </div>
    )
}

export default DiverInfoSix