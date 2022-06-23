import { React, useContext, createContext, useState, setState } from 'react';
import CreatePartyForm from './CreatePartyForm';
import { PartyNameForm } from './PartyNameForm';
import UserHeader from './UserHeader';

const CreatePartyLanding = () => {
	const [partyName, setPartyName] = useState('');

	return (
		<div className='flex flex-col h-full'>
			<UserHeader />
			<div className='flex aspect-w-13 aspect-h-7 flex-row h-full items-center'>
				<video autoPlay loop muted className='object-cover	 z-0'>
					<source
						src={require('../videos/userLandingSmoke.mp4')}
						type='video/mp4'
						className=' z-10'
					/>
				</video>
				<div className='absolute flex-col  w-1/4 h-full'>
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
