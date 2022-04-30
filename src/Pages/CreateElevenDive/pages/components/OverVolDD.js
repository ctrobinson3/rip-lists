import React from 'react';
import '../../../../Components/Styles/modal.css';

const OverVolDD = ({ closeModal }) => {
	return (
		<div className="modal-background">
			<div className="modal-container">
				<div className="modal-content rules">
					<button className="modal-close" onClick={() => closeModal(false)}>
						Close
					</button>
					<h1 className="modal-header">Change DD</h1>
					<div className="modal-text"></div>
				</div>
			</div>
		</div>
	);
};

export default OverVolDD;
