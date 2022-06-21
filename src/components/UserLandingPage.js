import React from 'react';
import LogoutButton from './LogoutButton.js';
import Profile from './Profile.js';
import { useAuth0 } from '@auth0/auth0-react';

const UserLandingPage = () => {
	const { user } = useAuth0();
	return (
		<div>
			<header className='text-7xl'> Welcome {user.name}</header>
			<Profile />

			<LogoutButton />
		</div>
	);
};

export default UserLandingPage;
