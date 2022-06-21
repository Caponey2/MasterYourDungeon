import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLandingPage from './components/UserLandingPage';

function App() {
	const { isLoading } = useAuth0();

	if (isLoading) return <div> Loading ...</div>;
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<div>
							<LoginButton /> <LogoutButton />
						</div>
					}
				/>
				<Route
					path='/user'
					element={
						<div>
							<UserLandingPage />
						</div>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
