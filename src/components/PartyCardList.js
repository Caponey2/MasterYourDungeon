import React, { useEffect, useState } from 'react';

const PartyCardList = ({ characters }) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (characters.length > 0) {
			setLoaded(true);
		}
	}, [characters]);

	return (
		<div id='cardWrapper' className='grid space-x-2 lg:grid-cols-3'>
			{loaded === true
				? characters.map((character, index) => {
						return (
							<div id='card' className='flex h-4/5 max-w-1/2 relative'>
								<div
									id='partnerCard'
									className='bg-[#1c1c1c] text-gray-50 overflow-hidden rounded-md  flex flex-col'>
									<div>
										<h3 className='text-left pl-8 pb-4 pt-2 text-xl'>
											{character.CFName + ' ' + character.CLName}
										</h3>
									</div>

									<div class='flex items-center justify-center bg-[#2a2a2a] min-h-[200px]'>
										<a
											className='flex items-center justify-center'
											href='http://localhost:3000/user'
											target='_blank'
											rel='noreferrer noopener'>
											<img
												src={require(`../images/${character.race}-${character.class}.png`)}
												alt='EasyCode'
												className='flex max-h-[200px]'
											/>
										</a>
									</div>
									<div className='grid grid-cols-4'>
										<div className='p-4 pr-0 text-lg col-span-3'>
											<h4 className='font-bold'>
												{character.race + ' : ' + character.class}
											</h4>
										</div>
										<div className='col-span-1 pt-4'>
											<div className='w-20 h-20 shadow-inner shadow-[#2a2a2a] mt-auto ml-auto flex flex-col items-center justify-center'>
												<p className='text-semibold text-xl'>
													12 <br /> HP
												</p>
											</div>
											<div className='mt-2 w-20 h-20 shadow-inner shadow-[#2a2a2a] ml-auto flex flex-col items-center justify-center'>
												<p className='text-semibold text-xl'>
													16 <br /> AC
												</p>
											</div>
											<div className='mt-2 w-20 h-20 shadow-inner shadow-[#2a2a2a] ml-auto flex flex-col items-center justify-center'>
												<p class='text-semibold text-xl'>
													{character.level} <br /> LVL
												</p>
											</div>
										</div>
									</div>

									<div class='mt-auto pl-4'>
										<p>Player: {character.PFName + ' ' + character.PLName} </p>
									</div>
								</div>
							</div>
						);
				  })
				: ''}
		</div>
	);
};

export default PartyCardList;
