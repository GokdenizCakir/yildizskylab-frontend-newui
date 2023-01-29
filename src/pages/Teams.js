import React, { useRef, useState } from 'react';
import teams from './../data/teams.json';
import DownArrow from '../components/DownArrow';

const Teams = () => {
	const [teamSelect, setTeamSelect] = useState('arge');
	const [teamIndex, setTeamIndex] = useState(0);
	const [selectedTeam, setSelectedTeam] = useState('algolab');

	return (
		<section className='h-screen relative pt-36 bg-customDarkPurple '>
			<div className=' text-customLightPink text-2xl my-16 flex justify-center'>
				<div className='flex justify-between w-auto items-center'>
					<div
						onClick={() => {
							setTeamSelect('arge');
							setTeamIndex(0);
							setSelectedTeam('algolab');
						}}
						className={`px-3 pt-[0.2rem] pb-[0.1rem] cursor-pointer leading-tight ${
							teamSelect === 'arge' ? 'bg-customAccent' : 'bg-customDarkPurple'
						} `}
					>
						ARGE EKİPLERİ
					</div>
					<div
						onClick={() => {
							setTeamSelect('social');
							setTeamIndex(0);
							setSelectedTeam('organizasyon');
						}}
						className={`px-3 pt-[0.2rem] py-[0.1rem] cursor-pointer ${
							teamSelect === 'social'
								? 'bg-customAccent'
								: 'bg-customDarkPurple'
						} `}
					>
						SOSYAL EKİPLER
					</div>
				</div>
			</div>
			<div>
				<div className='flex justify-center space-x-12'>
					{(teamSelect === 'arge' ? teams.arge : teams.social).map(
						(team, index) => {
							return (
								<div
									key={index}
									className='flex flex-col justify-between items-center space-y-8'
								>
									<div
										className={`w-[5.2rem] h-[5.2rem] flex justify-center items-center ring-customAccent ${
											teamIndex === index ? 'ring-8' : null
										} p-2 cursor-pointer bg-customLightPink overflow-hidden rounded-[50%]`}
									>
										<img
											onClick={() => {
												setTeamIndex(index);
												setSelectedTeam(team.name);
											}}
											src={require('../assets/' + team.logo)}
											className='object-cover'
											alt='logo'
										/>
									</div>
									<div className='text-customLightPink text-lg text-end w-12 -rotate-45 '>
										{team.name}
									</div>
								</div>
							);
						}
					)}
				</div>
				<div className='w-screen flex mt-28 justify-center'>
					<div className='font-inter w-1/2 text-center'>
						{teams[teamSelect].find(team => team.name === selectedTeam).details}
					</div>
				</div>
			</div>
			<DownArrow />
		</section>
	);
};

export default Teams;
