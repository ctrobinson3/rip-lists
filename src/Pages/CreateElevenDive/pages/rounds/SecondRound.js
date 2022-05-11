import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const SecondRound = ({ next, back, dives, onChange, onClick, opt }) => {
	//display Optional or Vol
	var oList = [opt.o6, opt.o7, opt.o8];
	var optDisplay = oList.map((a) => {
		if (a == true) return 'Opt';
		else return 'Vol';
	});

	return (
		<div className="page-container">
			<div className="eleven-form">
				<header className="header">
					<h3 className="h3">Second Round</h3>
					<p className="header-p">(1 Optional, 2 Voluntaries)</p>
				</header>
				<form className="input-div">
					{/* Sixth Dive */}
					<label className="form-label">Sixth Dive:</label>
					<input
						className="form-input"
						id="d6"
						value={dives.d6}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o6}
								id="o6"
							/>
							<div className="toggle__fill" />
						</label>
						<label className="opt-label">{optDisplay[0]}</label>
					</div>
					{/* Seventh Dive */}
					<label className="form-label">Seventh Dive:</label>
					<input
						className="form-input"
						id="d7"
						value={dives.d7}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o7}
								id="o7"
							/>
							<div className="toggle__fill" />
						</label>
						<label className="opt-label">{optDisplay[1]}</label>
					</div>
					{/* Eighth Dive */}
					<label className="form-label">Eighth Dive:</label>
					<input
						className="form-input"
						id="d8"
						value={dives.d8}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o8}
								id="o8"
							/>
							<div className="toggle__fill" />
						</label>
						<label className="opt-label">{optDisplay[2]}</label>
					</div>
				</form>
				<div className="eleven-form-buttons">
					<FaArrowAltCircleLeft className="eleven-form-arrow" onClick={back} />
					<FaArrowAltCircleRight className="eleven-form-arrow" onClick={next} />
				</div>
			</div>
		</div>
	);
};

export default SecondRound;
