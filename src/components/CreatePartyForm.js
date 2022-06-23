import React from 'react';

const CreatePartyForm = () => {
	return (
		<div
			className='flex self-center w-3/4 bg-blue-300 rounded-lg 
        border shadow-md md:flex-row  hover:bg-gray-300 
        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
			<form className='space-y-4 text-red-700 '>
				<div className='flex flex-wrap -mx-2 space-y-4 md:space-y-0'>
					<div className='w-full px-2 md:w-1/2'>
						<label className='block mb-1'>Player First Name</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
							name='firstName'
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
						<select
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'>
							<option> --- </option>
							<option>Dwarf</option>
							<option>Elf</option>
							<option>Halfling</option>
							<option>Human</option>
							<option>Dragonborn</option>
							<option>Gnome</option>
							<option>Half-Elf</option>
							<option>Half-Orc</option>
							<option>Tiefling</option>
						</select>
					</div>
					<div className='w-full px-2 md:w-1/3'>
						<label className='block mb-1'>Class</label>
						<select
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'>
							<option> --- </option>
							<option>Barbarian</option>
							<option>Bard</option>
							<option>Cleric</option>
							<option>Druid</option>
							<option>Fighter</option>
							<option>Monk</option>
							<option>Paladin</option>
							<option>Ranger</option>
							<option>Rogue</option>
							<option>Sorceror</option>
							<option>Warloc</option>
							<option>Wizard</option>
						</select>
					</div>
					<div className='w-full px-2 md:w-1/3'>
						<label className='block mb-1'>Level</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
						/>
					</div>
				</div>
				<div className='flex flex-wrap justify-center -mx-2 space-y-4 md:space-y-0'>
					<button className='w-1/2 bg-white h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'>
						Add Character to Party
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePartyForm;
