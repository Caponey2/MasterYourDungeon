import React from 'react';
import LogoutButton from './LogoutButton.js';
import Profile from './Profile.js';
import { useAuth0 } from '@auth0/auth0-react';
import SidebarNav from './SidebarNav';
import SidebarButton from './SideBarButton';
//import { Grommet } from 'grommet';

const UserLandingPage = () => {
	const { user } = useAuth0();
	return (
		<div>
			<header> Welcome {user.name}</header>
			{/* <Profile /> */}
			<SidebarNav />
			{/* <LogoutButton /> */}
		</div>
	);
};

export default UserLandingPage;
