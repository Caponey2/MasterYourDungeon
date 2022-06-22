import React from 'react';
import EncounterForm from './EncounterForm';
import UserHeader from './UserHeader';

const CreateEncounterLanding = () => {
	return (
		<div className='flex flex-col justify-center justify-evenly h-full'>
			<UserHeader />
			<div className='flex flex-evenly flex-row justify-between h-full'>
				<div className='flex justify-center w-1/2'>
					<EncounterForm />
				</div>
				<div className='flex justify-center w-1/2'>text</div>
			</div>
		</div>
	);
};

export default CreateEncounterLanding;