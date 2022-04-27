import React from 'react';
import '../../../../Components/Styles/modal.css';
import DiveModalContent from '../../../../Components/DiveLists/DiveModalContent';

const DiveModal = ({ closeDiveModal }) => {
	return (
		<div className="modal-background">
			<div className="modal-container">
				<div className="modal-content">
					<button className="modal-close" onClick={() => closeDiveModal(false)}>
						Close
					</button>
					<DiveModalContent />
				</div>
			</div>
		</div>
	);
};

export default DiveModal;
