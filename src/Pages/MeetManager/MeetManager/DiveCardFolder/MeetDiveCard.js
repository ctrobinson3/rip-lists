import React, { useState } from 'react';
import DCTable from './DCTable';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import './dcCss.css';

const MeetDiveCard = ({
	scores,
	diveArray,
	diverName,
	diverSchool,
	meet,
	finalScore,
}) => {
	// const meetAndName = meet + diverName + diverSchool;
	// const docName = meetAndName.replace(/\s/g, '');
	const [docName, setDocName] = useState('');

	const onChange = (e) => {
		const newValue = e.target.value;
		setDocName(newValue);
	};

	const download = () => {
		const input = document.getElementById('div-print');
		html2canvas(input, {
			logging: true,
			letterRendering: 1,
			useCORS: true,
		}).then((canvas) => {
			const imgWidth = 210;
			const imgHeight = 297;
			const imgData = canvas.toDataURL('img/png');
			const pdf = new jsPDF('p', 'mm', [imgHeight, imgWidth]);
			pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
			pdf.save(docName);
		});
	};

	return (
		<div>
			<div id='div-print' className='print-div'>
				<DCTable
					scores={scores}
					diveArray={diveArray}
					diverName={diverName}
					diverSchool={diverSchool}
					meet={meet}
					finalScore={finalScore}
				/>
			</div>
			<div className='name-doc'>
				<div className='name-doc-text'>Name Download:</div>
				<input className='form-input margin' onChange={onChange} />
				<div className='download-btn' onClick={download}>
					Download
				</div>
			</div>
		</div>
	);
};

export default MeetDiveCard;
