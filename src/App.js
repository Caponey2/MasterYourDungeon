import './App.css';
import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserHeader from './components/UserHeader';
import CreateContainer from './components/CreateContainer';
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
						<div className='flex-column bg-gray-700 w-screen h-screen'>
							<UserHeader />
							<div className='flex flex-evenly flex-row justify-between h-full'>
								<div className='flex justify-center w-1/3 '>
									Current Party and Party List
								</div>
								<div className='flex align-self-center  w-1/3'>
									<CreateContainer />
								</div>
								<div className='flex justify-center w-1/3'>
									Remaining Encounters
								</div>
							</div>
						</div>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
