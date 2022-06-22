import React from 'react';

const EncounterForm = () => {
	return (
		<form className='space-y-4 text-gray-700'>
			<div className='flex flex-wrap'>
				<div className='w-full'>
					<label className='block mb-1'>Card number</label>
					<input
						className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
						type='text'
					/>
				</div>
			</div>
			<div className='flex flex-wrap -mx-2 space-y-4 md:space-y-0'>
				<div className='w-full px-2 md:w-1/2'>
					<label className='block mb-1'>First name</label>
					<input
						className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
						type='text'
					/>
				</div>
				<div className='w-full px-2 md:w-1/2'>
					<label className='block mb-1'>Last name</label>
					<input
						className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
						type='text'
					/>
				</div>
			</div>
			<div className='flex flex-wrap -mx-2 space-y-4 md:space-y-0'>
				<div className='w-full px-2 md:w-1/3'>
					<label className='block mb-1'></label>
					<input
						className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
						type='text'
					/>
				</div>
				<div className='w-full px-2 md:w-1/3'>
					<label className='block mb-1'></label>
					<input
						className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
						type='text'
					/>
				</div>
				<div className='w-full px-2 md:w-1/3'>
					<label className='block mb-1'></label>
					<input
						className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
						type='text'
					/>
				</div>
			</div>
		</form>
	);
};

export default EncounterForm;
