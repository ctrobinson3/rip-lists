import React, { useState } from 'react';

const ThisDiver = ({ diver }) => {
	const diveList = diver.dives;

	//show dive list
	const [showList, setShowList] = useState(false);
	return (
		<div className='RM-diver'>
			<p>
				<b>{diver.name}</b> - {diver.school}
			</p>
			<div className='RM-dives-btn' onClick={() => setShowList(!showList)}>
				Dives
			</div>
			<div className='RM-dive-list'>
				{showList && (
					<div>
						{diveList.map((m) => (
							<div key={m.order}>
								{m.order} - {m.dive}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default ThisDiver;
