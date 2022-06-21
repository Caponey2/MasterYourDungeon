import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLandingPage from './components/UserLandingPage';
import { Grommet } from 'grommet';
import SidebarNav from './components/SidebarNav';
import SidebarButton from './components/SideBarButton';
// import { withStyles } from '@material-ui/core/styles';

function App() {
	const { isLoading, user } = useAuth0();
	const theme = {
		global: {
			font: {
				family: 'Arial',
				size: '14px',
				height: '20px',
			},
		},
	};

	if (isLoading) return <div> Loading ...</div>;
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<Grommet theme={theme}>
							<LoginButton /> <LogoutButton />
						</Grommet>
					}
				/>
				<Route
					path='/user'
					element={
						<div>
							<Grommet theme={theme}>
								<UserLandingPage />
							</Grommet>
						</div>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
