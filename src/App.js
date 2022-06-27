import './App.css';
import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserHeader from './components/UserHeader';
import CreateContainer from './components/CreateContainer';
import CreateEncounterLanding from './components/CreateEncounterLanding';
import CreatePartyLanding from './components/CreatePartyLanding';
import AltHeader from './components/AltHeader';
// import { withStyles } from '@material-ui/core/styles';

function App() {
	const { isLoading, isAuthenticated } = useAuth0();
	// let landing = '/';
	// if (isAuthenticated) {
	// 	landing = '/user';
	// }
	if (isLoading) return <div> Loading ...</div>;
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<div className='flex flex-grow bg-gray-800 w-screen h-screen  overflow-hidden'>
							<div className='flex justify-center w-screen '>
								<video autoPlay loop muted className=' flex z-0'>
									<source
										src={require('./videos/backgroundsmoke.mp4')}
										type='video/mp4'
										className='z-10'
									/>
								</video>
								<div className='absolute  justify-center items-center animate-spin-slow overflow-hidden z-20'>
									<LoginButton />
								</div>
							</div>
						</div>
					}
				/>
				<Route
					path='/user'
					element={
						<div className='flex-col bg-gray-700 w-screen h-screen'>
							<AltHeader />
							<div className='flex aspect-w-13 aspect-h-7'>
								<video autoPlay loop muted className='object-cover	 z-0'>
									<source
										src={require('./videos/userLandingSmoke.mp4')}
										type='video/mp4'
										className=' z-10'
									/>
								</video>
								<div className='flex justify-center items-center  z-20'>
									<CreateContainer />
								</div>
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
							<CreatePartyLanding />
						</div>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
