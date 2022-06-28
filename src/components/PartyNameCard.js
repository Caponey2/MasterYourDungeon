import React, { useEffect, useState } from 'react';

const PartyNameCard = ({ partyName }) => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (partyName) {
			setLoaded(true);
		}
	}, [partyName]);

	return (
		<div
			className='flex self-center flex-col  h-1/2 w-3/4 bg-blue-300 rounded-lg 
        border shadow-md md:flex-row md:max-w-xl hover:bg-gray-300 
        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 z-30'>
			<div className='flex flex-col items-center text-red-700 w-full px-2 md:w-full'>
				<label className='flex block mb1 justify-self-center h-1/2'>
					Party Name
				</label>
				{loaded ? (
					<p className='flex self-center justify-self-center block mb-1 h-1/2 text-6xl'>
						{partyName}
					</p>
				) : (
					<p className='flex block mb-1 h-1/2 '></p>
				)}
			</div>
		</div>
	);
};

export default PartyNameCard;
