import React from 'react';
import AltHeader from './AltHeader';

const CreateEncounterLanding = () => {
	return (
		<div className='flex flex-col h-full'>
			<AltHeader />
			<div className='flex flex-row h-full items-center'>
				<div className='flex flex-col w-1/2'>
					<div className='flex justify-center self-center'>
						<div>DIV</div>
					</div>
				</div>
				<div className='flex self-center justify-center w-1/2'>text</div>
			</div>
		</div>
	);
};

export default CreateEncounterLanding;
