import React from 'react'

const RulesModal = ({closeRulesModal}) => {
    return (
        <div className='modal-container'>
            <button 
            className='modal-close'
            onClick = {() => closeRulesModal(false)}>
                close
            </button>
            RulesModal
        </div>
    )
}

export default RulesModal