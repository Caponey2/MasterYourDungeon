import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLandingPage from './components/UserLandingPage';
// import { withStyles } from '@material-ui/core/styles';

function App() {
	const { isLoading, user } = useAuth0();

	if (isLoading) return <div> Loading ...</div>;
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<div className='flex flex-grow bg-gray-800 object-fill h-screen justify-center overflow-hidden'>
							<div className='flex animate-spin-slow overflow-hidden'>
								<LoginButton />
							</div>
						</div>
					}
				/>
				<Route
					path='/user'
					element={
						<div>
							<div>
								<UserLandingPage />
							</div>
						</div>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
