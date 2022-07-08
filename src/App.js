import './App.css';
import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateContainer from './components/CreateContainer';
import CreateEncounterLanding from './components/CreateEncounterLanding';
import CreatePartyLanding from './components/CreatePartyLanding';
import AltHeader from './components/AltHeader';
import { SmokeyText } from './components/SmokeyText';
import React, { useState, createContext } from 'react';
import ReactAudioPlayer from 'react-audio-player';
// import { withStyles } from '@material-ui/core/styles';
export const PartiesContext = createContext();
function App() {
	// eslint-disable-next-line no-unused-vars
	const { isLoading, isAuthenticated } = useAuth0();
	const [parties, setParties] = useState([]);
	const [currentParty, SetCurrentParty] = useState('');

	const updateParty = (update) => {
		SetCurrentParty(update);
	};
	const addParty = (party) => {
		setParties(parties.concat(party));
	};
	if (isLoading) return <div> Loading ...</div>;
	return (
		<PartiesContext.Provider
			value={{
				value1: [currentParty, SetCurrentParty],
				updateParty: updateParty,
				addParty: addParty,
			}}>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<div className='flex flex-grow bg-gray-800 w-screen h-screen  overflow-hidden'>
								<ReactAudioPlayer
									src={require('./audio/318_The_Gaping_Maw.mp3')}
									autoPlay
								/>
								<div className='flex justify-center w-auto min-w-full min-h-full'>
									<video
										autoPlay
										loop
										muted
										className='absolute  w-auto min-w-screen min-h-screen max-w-none  z-0'>
										<source
											src={require('./videos/backgroundsmoke.mp4')}
											type='video/mp4'
											className='z-10 '
										/>
									</video>
									<div className='absolute  justify-center items-center animate-spin-slow overflow-hidden z-20'>
										<LoginButton />
									</div>
									<div className='absolute  h-full'>
										<SmokeyText />
									</div>
								</div>
							</div>
						}
					/>
					<Route
						path='/user'
						element={
							<div className='flex-col bg-gray-700 w-screen h-screen'>
								<ReactAudioPlayer
									src={require('./audio/318_The_Gaping_Maw.mp3')}
									autoPlay
								/>
								<AltHeader />
								<div className='flex aspect-w-13 aspect-h-7'>
									<video autoPlay loop muted className='object-cover	 z-0'>
										<source
											src={require('./videos/userLandingSmoke.mp4')}
											type='video/mp4'
											className=' z-10'
										/>
									</video>
									{/* <div className='text-white text-5xl'>Downstream Features</div> */}
									<div className='flex justify-center items-center  z-20'>
										<CreateContainer />
									</div>
									{/* <div className='text-white text-5xl'>Upcoming Features</div> */}
								</div>
							</div>
						}
					/>
					<Route
						path='/encounter'
						element={
							<div className='flex-col bg-gray-700 w-screen h-screen'>
								<CreateEncounterLanding />
							</div>
						}
					/>
					<Route
						path='/party'
						element={
							<div className='flex-col bg-gray-700 w-screen h-screen'>
								<ReactAudioPlayer
									src={require('./audio/318_The_Gaping_Maw.mp3')}
									autoPlay
								/>
								<CreatePartyLanding />
							</div>
						}
					/>
				</Routes>
			</Router>
		</PartiesContext.Provider>
	);
}

export default App;
