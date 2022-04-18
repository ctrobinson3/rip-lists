import React from 'react'
import './modal.css'
import DiveModalContent from './DiveModalContent'

const DiveModal = ({closeDiveModal}) => {
    

    return (
        <div className='modal-background'>
            <div className='modal-container'>
                <div className='modal-content'>
                <button
                className='modal-close'
                onClick ={() => closeDiveModal(false)}>
                    close
                </button>
                <DiveModalContent />
                </div>
            </div>
        </div>
    )
}

export default DiveModal