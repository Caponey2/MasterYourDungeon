import { React, useContext, createContext, useState, setState } from 'react';
import CreatePartyForm from './CreatePartyForm';
import { PartyNameForm } from './PartyNameForm';
import UserHeader from './UserHeader';

const CreatePartyLanding = () => {
	const [partyName, setPartyName] = useState('');

	return (
		<div className='flex flex-col h-full'>
			<UserHeader />
			<div className='flex flex-row h-full items-center'>
				<div className='flex flex-col  w-1/2 h-full'>
					<div className='flex flex-col  h-1/4 justify-center self-center w-full'>
						<PartyNameForm />
					</div>
					<div className='flex flex-col h-full justify-center self-center w-full'>
						<CreatePartyForm />
					</div>
				</div>
				<div className='flex self-center justify-center w-1/2'>
					<div>{partyName}</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePartyLanding;
