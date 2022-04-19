import React from 'react'
import '../../../../Components/Styles/modal.css'

const RulesModal = ({closeRulesModal}) => {
    return (
        <div className='modal-background'>
            <div className='modal-container'>
                <div className='modal-content'>
                    <button 
                    className='modal-close'
                    onClick = {() => closeRulesModal(false)}>
                        close
                    </button>
                    <h1 className='modal-header'>Six Dive Rules</h1>
                    <div className='modal-text'>
                        <ul>
                            <li>Six valid dives must be entered.</li>
                            <li>No repeated dives, even if it's in a different position.</li>
                            <li>The first dive is considered your 'voluntary' or 'required' dive. The DD for this dive will not exceed 1.8.</li>
                            <li>If a dive is selected that is above 1.8, the DD will be adjusted.</li>
                            <li>The remaining five dives are considered your 'optional' dives. A total of four categories must be selected among these five dives</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RulesModal