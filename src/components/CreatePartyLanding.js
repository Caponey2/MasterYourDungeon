import { React, useState } from 'react';
import AltHeader from './AltHeader';
import CreatePartyForm from './CreatePartyForm';
import PartyCardList from './PartyCardList';
import PartyNameCard from './PartyNameCard';
import { PartyNameForm } from './PartyNameForm';
import SavePartyButton from './SavePartyButton';

const CreatePartyLanding = () => {
	const [characters, setCharacters] = useState([]);
	const [partyName, setPartyName] = useState(null);

	const addName = (name) => {
		setPartyName(name);
	};
	const addCharacter = (character) => {
		setCharacters([...characters, character]);
	};

	return (
		<div className='flex flex-col h-full'>
			<AltHeader />
			<div id='belowHeader' className='flex aspect-w-13 aspect-h-7   h-full '>
				<video autoPlay loop muted className='object-cover	 z-0'>
					<source
						src={require('../videos/userLandingSmoke.mp4')}
						type='video/mp4'
						className=' z-10'
					/>
				</video>
				<div id='BothHalves' className='flex flex-row content-start'>
					<div
						id='leftHalf'
						className='flex flex-col  w-1/2 h-full order-first'>
						{partyName === null ? (
							<div
								className='flex flex-col  h-1/4 justify-center self-center w-full'
								id='PartyNameForm'>
								{partyName !== null ? (
									<h1> {partyName} </h1>
								) : (
									<PartyNameForm addName={addName} />
								)}
							</div>
						) : (
							<div
								className='flex flex-col  h-1/4 justify-center self-center w-full'
								id='PartyNameForm'>
								<PartyNameCard partyName={partyName} />
							</div>
						)}

						<div
							className='flex flex-col h-full justify-center self-center w-full'
							id='CharacterForm'>
							<CreatePartyForm addCharacter={addCharacter} />
						</div>
						<div
							className='flex flex-col h-full justify-center self-center w-full'
							id='SavePartyButton'>
							<SavePartyButton />
						</div>
					</div>
					<div
						id='rightHalf'
						className='flex flex-start items-center w-1/2 h-full order-last'>
						<PartyCardList characters={characters} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePartyLanding;
