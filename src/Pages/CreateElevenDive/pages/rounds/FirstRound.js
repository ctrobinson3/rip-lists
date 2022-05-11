import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const FirstRound = ({ next, dives, onChange, onClick, opt }) => {
	//display Optional or Vol
	var oList = [opt.o1, opt.o2, opt.o3, opt.o4, opt.o5];
	var optDisplay = oList.map((a) => {
		if (a == true) return 'Opt';
		else return 'Vol';
	});

	return (
		<div className="page-container">
			<div className="eleven-form">
				<header className="header">
					<h3 className="h3">First Round</h3>
					<p className="header-p">(3 Optionals, 2 Voluntaries)</p>
				</header>
				<form className="input-div">
					{/* First Dive */}
					<label className="form-label">First Dive:</label>
					<input
						className="form-input"
						id="d1"
						value={dives.d1}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o1}
								id="o1"
							/>
							<div className="toggle__fill" />
							<label className="opt-label">{optDisplay[0]}</label>
						</label>
					</div>
					{/* Second Dive */}
					<label className="form-label">Second Dive:</label>
					<input
						className="form-input"
						id="d2"
						value={dives.d2}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o2}
								id="o2"
							/>
							<div className="toggle__fill" />
						</label>
						<label className="opt-label">{optDisplay[1]}</label>
					</div>
					{/* Third Dive */}
					<label className="form-label">Third Dive:</label>
					<input
						className="form-input"
						id="d3"
						value={dives.d3}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o3}
								id="o3"
							/>
							<div className="toggle__fill" />
						</label>
						<label className="opt-label">{optDisplay[2]}</label>
					</div>
					{/* Fourth Dive */}
					<label className="form-label">Fourth Dive:</label>
					<input
						className="form-input"
						id="d4"
						value={dives.d4}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o4}
								id="o4"
							/>
							<div className="toggle__fill" />
						</label>
						<label className="opt-label">{optDisplay[3]}</label>
					</div>
					{/* Fifth Dive */}
					<label className="form-label">Fifth Dive:</label>
					<input
						className="form-input"
						id="d5"
						value={dives.d5}
						onChange={onChange}
						placeholder=' Enter Dive Number'
					/>
					<div className="opt-container">
						<label className="toggle">
							<input
								type="checkbox"
								className="toggle__input"
								onChange={onClick}
								checked={opt.o5}
								id="o5"
							/>
							<div className="toggle__fill" />
						</label>
						<label className="opt-label">{optDisplay[4]}</label>
					</div>
				</form>
				<div className="eleven-form-buttons">
					<FaArrowAltCircleRight className="eleven-form-arrow" onClick={next} />
				</div>
			</div>
		</div>
	);
};

export default FirstRound;
