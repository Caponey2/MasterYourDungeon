import React, { useContext } from 'react';
import { PartiesContext } from '../App';

const SavePartyButton = () => {
	const { addParty } = useContext(PartiesContext) || undefined;
	const { currentParty } = useContext(PartiesContext) || undefined;

	const handleClick = (e) => {
		e.preventDefault();
		console.log('clicked');
		addParty(currentParty);
	};

	return (
		<div
			onClick={(e) => handleClick(e)}
			className='flex self-center place-content-center  w-3/4 bg-blue-300 rounded-lg 
        border shadow-md text-7xl md:flex-row md:max-w-xl hover:bg-gray-300 
        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 z-30 text-red-700'>
			<div className='flex  mx-5 my-5'>Save Party</div>
		</div>
	);
};

export default SavePartyButton;
