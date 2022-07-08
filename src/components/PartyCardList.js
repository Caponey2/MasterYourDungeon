import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
//import fs from 'fs';

const PartyCardList = ({ characters }) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (characters.length > 0) {
			setLoaded(true);
		}
	}, [characters]);

	const tryRequire = (character) => {
		try {
			//console.log();
			return require(`../images/${character.race}-${character.class}.png`);
		} catch (err) {
			console.log(err);
			return require('../images/pngfind.com-dnd-logo-png-3863446.png');
		}
	};

	return (
		<div id='cardWrapper' className='grid space-x-2 lg:grid-cols-3'>
			{loaded === true
				? characters.map((character, index) => {
						return (
							<div
								id='card'
								className='flex h-full max-w-1/3 relative fade-in-card py-4 px-2'>
								<ReactAudioPlayer
									src={require('../audio/zapsplat_warfare_sword_blade_single_slice_ground_small_stones_002_78297.mp3')}
									autoPlay
								/>
								<div
									id='partnerCard'
									className='bg-[#1c1c1c] text-gray-50 overflow-hidden rounded-md  flex flex-col'>
									<div>
										<h3 className='text-left pl-8 pb-4 pt-2 text-xl'>
											{character.CFName + ' ' + character.CLName}
										</h3>
									</div>

									<div class='flex items-center justify-center bg-[#2a2a2a] min-h-[200px] max-w-[240px]'>
										<a
											className='flex items-center justify-center'
											href='http://localhost:3000/user'
											target='_blank'
											rel='noreferrer noopener'>
											<img
												src={tryRequire(character)}
												alt='EasyCode'
												className='flex max-h-[200px] max-w-[200]'
											/>
										</a>
									</div>
									<div className='grid grid-cols-3'>
										<div className='p-4 pr-0 text-lg col-span-2'>
											<h4 className='font-bold'>
												{character.race + ' : ' + character.class}
											</h4>
											<p class='text-semibold text-xl'>
												{' '}
												Level: {character.level}
											</p>
											<p className='font-bold'>Player:</p>
											<p className='font-bold'>
												{character.PFName + ' ' + character.PLName}{' '}
											</p>
										</div>
										<div className='col-span-1 pt-4'>
											<div className='w-20 h-20 shadow-inner shadow-[#2a2a2a] mt-auto ml-auto flex flex-col items-center justify-center'>
												<p className='text-semibold text-xl'>
													{character.hp} <br /> HP
												</p>
											</div>
											<div className='mt-2 w-20 h-20 shadow-inner shadow-[#2a2a2a] ml-auto flex flex-col items-center justify-center'>
												<p className='text-semibold text-xl'>
													{character.ac} <br /> AC
												</p>
											</div>
										</div>
									</div>

									<div class=''></div>
								</div>
							</div>
						);
				  })
				: ''}
		</div>
	);
};

export default PartyCardList;
