import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const ThirdRound = ({ back, dives, onChange, onClick, opt }) => {
	//display Optional or Vol
	var oList = [opt.o9, opt.o10, opt.o11];
	var optDisplay = oList.map((a) => {
		if (a == true) return 'Opt';
		else return 'Vol';
	});

	return (
		<div className="page-container">
			<div className="eleven-form">
				<header className="header">
					<h3 className="h3">Third Round</h3>
					<p className="header-p">(2 Optionals, 1 Voluntary)</p>
				</header>
				<form className="input-div">
					{/* Ninth Dive */}
					<label className="form-label">Ninth Dive:</label>
					<input
						className="form-input"
						id="d9"
						value={dives.d9}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o9}
								id="o9"
							/>
							<div className="toggle__fill" />
						</label>
						<label className="opt-label">{optDisplay[0]}</label>
					</div>
					{/* Tenth Dive */}
					<label className="form-label">Tenth Dive:</label>
					<input
						className="form-input"
						id="d10"
						value={dives.d10}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o10}
								id="o10"
							/>
							<div className="toggle__fill" />
						</label>
						<label className="opt-label">{optDisplay[1]}</label>
					</div>
					{/* Eleventh Dive */}
					<label className="form-label">Eleventh Dive:</label>
					<input
						className="form-input"
						id="d11"
						value={dives.d11}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o11}
								id="o11"
							/>
							<div className="toggle__fill" />
						</label>
						<label className="opt-label">{optDisplay[2]}</label>
					</div>
				</form>
				<div className="eleven-form-buttons">
					<FaArrowAltCircleLeft className="eleven-form-arrow" onClick={back} />
				</div>
			</div>
		</div>
	);
};

export default ThirdRound;
