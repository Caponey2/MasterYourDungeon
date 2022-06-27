import React from 'react';
import CreateEncounter from './CreateEncounter';
import CreateParty from './CreateParty';

const CreateContainer = () => {
	return (
		<div className='flex flex-col h-full justify-around '>
			<CreateEncounter />
			<CreateParty />
		</div>
	);
};

export default CreateContainer;
