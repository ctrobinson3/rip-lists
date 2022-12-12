import React from 'react';
import { motion as m, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

function Section({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section ref={ref} className='abt-wrap'>
			<span
				style={{
					opacity: isInView ? 1 : 0,
					transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
				}}
			>
				{children}
			</span>
		</section>
	);
}

export default function About() {
	return (
		<>
			<Section>
				<div className='abt-content'>
					<div className='abt-question'>What's Rip Lists?</div>
					<div className='abt-answer'>
						Rip Lists is an online platform for divers and coaches to create and
						share dive cards quickly and easily.
					</div>
				</div>
			</Section>
			<Section>
				<div className='abt-content-right'>
					<div className='abt-question'>What's the plan?</div>
					<div className='abt-answer'>
						I believe there is a need for a central hub in the diving world. A
						place for divers, coaches, and supporters to communicate and share
						their progress and ideas with one another. I to not only have an
						easy and accessible way to create dive cards and run meets, but to
						also display statistics for teams and individuals to track progress
						and keep up on goals.
					</div>
				</div>
			</Section>
			<Section>
				<div className='abt-content'>
					<div className='abt-question'>Who am "I"?</div>
					<div className='abt-answer'>
						I am a former diver, current coach, and fanatic of the sport. I saw
						a hole in the diving community that I believe could be filled by
						what Rip Lists has to offer.
					</div>
				</div>
			</Section>
		</>
	);
}
