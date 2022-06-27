import React, { useState } from 'react';

const CreatePartyForm = ({ addCharacter }) => {
	const [party, setParty] = useState('');
	const [characters, setCharacters] = useState([]);
	const [character, setCharacter] = useState({
		PFName: '',
		PLName: '',
		CFName: '',
		CLName: '',
		race: '',
		class: '',
		level: null,
	});

	const handleChange = (e) => {
		setCharacter({ ...character, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addCharacter(character);
		setCharacter({
			PFName: '',
			PLName: '',
			CFName: '',
			CLName: '',
			race: '',
			class: '',
			level: null,
		});
	};

	return (
		<div
			className='flex self-center flex-col w-3/4 bg-blue-300 rounded-lg 
        border shadow-md md:flex-row  md:max-w-xl hover:bg-gray-300 
        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
			<form className='flex flex-col w-full space-y-4 text-red-700 z-30'>
				<div className='flex flex-wrap -mx-2 space-y-4 md:space-y-0'>
					<div className='w-full px-2 md:w-1/2'>
						<label className='block mb-1'>Player First Name</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
							name='PFName'
							value={character.PFName}
							onChange={handleChange}
						/>
					</div>
					<div className='w-full px-2 md:w-1/2'>
						<label className='block mb-1'>Player Last Name</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
							name='PLName'
							value={character.PLName}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className='flex flex-wrap -mx-2 space-y-4 md:space-y-0'>
					<div className='w-full px-2 md:w-1/2'>
						<label className='block mb-1'>Character First Name</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-blue-600 border rounded-lg focus:shadow-outline'
							type='text'
							name='CFName'
							value={character.CFName}
							onChange={handleChange}
						/>
					</div>
					<div className='w-full px-2 md:w-1/2'>
						<label className='block mb-1'>Character Last Name</label>
						<input
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
							name='CLName'
							value={character.CLName}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='flex flex-wrap -mx-2 space-y-4 md:space-y-0'>
					<div className='w-full px-2 md:w-1/3'>
						<label className='block mb-1'>Race</label>
						<select
							className='w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'
							type='text'
							name='race'
							value={character.race}
							onChange={handleChange}>
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
							type='text'
							name='class'
							value={character.class}
							onChange={handleChange}>
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
							name='level'
							value={character.level}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className='flex flex-wrap justify-center -mx-2 space-y-4 md:space-y-0'>
					<button
						onClick={(e) => handleSubmit(e)}
						className='w-1/2 bg-white h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline'>
						Add Character to Party
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreatePartyForm;
