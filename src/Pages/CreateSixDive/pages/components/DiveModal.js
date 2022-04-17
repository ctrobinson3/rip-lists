import React from 'react'

const DiveModal = ({closeDiveModal}) => {
    return (
        <div className='modal-container'>
            <button
            className='modal-close'
            onClick ={() => closeDiveModal(false)}>
                close
            </button>
            DiveModal
        </div>
    )
}

export default DiveModal