import React, { useState } from 'react';

export const PartyNameForm = ({ addName }) => {
	const [partyName, setPartyName] = useState({
		name: '',
	});

	const handleChange = (e) => {
		setPartyName(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addName(partyName);
		setPartyName({
			name: '',
		});
	};

	return (
		<div
			className='flex self-center flex-col  w-3/4 bg-blue-300 rounded-lg 
        border shadow-md md:flex-row md:max-w-xl hover:bg-gray-300 
        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 z-30'>
			<form className='flex flex-col w-full space-y-4 text-red-700 '>
				<div className='flex flex-col -mx-2 space-y-4 md:space-y-0'>
					<div className='flex flex-col items-center w-full px-2 md:w-full'>
						<div className='flex flex-wrap w-full'>
							<label className=' block mb-1'>Party Name</label>
							<input
								className='flex  w-full h-10 px-3 mb-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
								type='text'
								name='partyName'
								value={partyName.name}
								onChange={handleChange}
							/>
						</div>
						<button
							onClick={(e) => handleSubmit(e)}
							className=' self-center w-1/2 bg-white h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'>
							Add Party
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
