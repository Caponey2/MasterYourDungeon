import React from 'react';
import CreateEncounter from './CreateEncounter';
import CreateParty from './CreateParty';

const CreateContainer = () => {
	return (
		<div className='flex flex-col justify-center justify-evenly'>
			<CreateEncounter />
			<CreateParty />
		</div>
	);
};

export default CreateContainer;
