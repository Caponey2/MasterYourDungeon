import React from 'react';

const CreateParty = () => {
	return (
		<div className='flex '>
			<a
				href='http://localhost:3000/party'
				className='flex flex-col items-center bg-blue-100 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
				<img
					className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
					src={require('../images/ezgif.com-gif-maker.png')}
					alt=''
				/>
				<div className='flex flex-col justify-between p-4 leading-normal'>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
						Have a party you'd love to build for?
					</h5>
					<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
						Click here to portal to a party builder so you can appropriately
						scale encounter challenge and rewards for them!
					</p>
				</div>
			</a>
		</div>
	);
};

export default CreateParty;
