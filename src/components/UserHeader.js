import React from 'react';
import LogoutButton from './LogoutButton.js';
import Profile from './Profile.js';
import { useAuth0 } from '@auth0/auth0-react';

const UserHeader = () => {
	const { user } = useAuth0();
	return (
		<header className='flex justify-between w-screen text-7xl text-blue-400 bg-red-800'>
			{' '}
			Welcome {user.name}
			<LogoutButton />
		</header>
	);
};

export default UserHeader;
