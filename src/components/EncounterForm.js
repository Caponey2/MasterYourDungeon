import React from 'react';

const EncounterForm = () => {
	return (
		<div
			className='flex bg-blue-100 rounded-lg 
        border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 
        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
			<form className='space-y-4 text-red-700 '>
				<div className='flex flex-wrap -mx-2 space-y-4 md:space-y-0'>
					<div className='w-full px-2 md:w-1/2'>
						<label className='block mb-1'>Player First Name</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
						/>
					</div>
					<div className='w-full px-2 md:w-1/2'>
						<label className='block mb-1'>Player Last Name</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
						/>
					</div>
				</div>

				<div className='flex flex-wrap -mx-2 space-y-4 md:space-y-0'>
					<div className='w-full px-2 md:w-1/2'>
						<label className='block mb-1'>Character First Name</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-blue-600 border rounded-lg focus:shadow-outline'
							type='text'
						/>
					</div>
					<div className='w-full px-2 md:w-1/2'>
						<label className='block mb-1'>Character Last Name</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
						/>
					</div>
				</div>
				<div className='flex flex-wrap -mx-2 space-y-4 md:space-y-0'>
					<div className='w-full px-2 md:w-1/3'>
						<label className='block mb-1'>Race</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
						/>
					</div>
					<div className='w-full px-2 md:w-1/3'>
						<label className='block mb-1'>Class</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
						/>
					</div>
					<div className='w-full px-2 md:w-1/3'>
						<label className='block mb-1'>Level</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EncounterForm;
