import React from 'react';
import '../../../../Components/Styles/modal.css';

const RulesModal = ({ closeRulesModal }) => {
	return (
		<div className="modal-background">
			<div className="modal-container">
				<div className="modal-content rules">
					<button
						className="modal-close"
						onClick={() => closeRulesModal(false)}
					>
						Close
					</button>
					<h1 className="modal-header">Eleven Dive Rules</h1>
					<div className="modal-text">
						<ul>
							<li>Eleven valid dives must be entered.</li>
							<li>No repeated dives, even if it's in a different position.</li>
							<li>
								A total of 6 optional and 5 voluntary dives must be represented.
								Dive numbers for the voluntaries must be circled.
							</li>
							<li>
								<b>First Round:</b> 3 optionals, 2 voluntaries
							</li>
							<li>
								<b>Second Round:</b> 1 optional, 2 voluntaries
							</li>
							<li>
								<b>Third Round:</b> 2 optionals, 1 voluntary
							</li>
							<li>
								Five categories must be represented in both the optional and
								voluntary dives. The optionals will have one category with 2
								dives.
							</li>
							<li>
								At least one optional dive from the doubled up category must be
								performed in the final three dives
							</li>
							<li>
								In the first 8 dives, all 5 categories must be represented. Both
								optional and voluntary dives may be used.
							</li>
							<li>
								The total DD for the voluntary dives must be 9.0 or less. If
								higher, either the DD for a voluntary dive must be adjusted, or
								a different dive with less DD will have to be selected.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RulesModal;
