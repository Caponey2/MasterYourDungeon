import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<button className='text-5xl' onClick={() => logout()}>
				<p>Flee through the portal</p>
			</button>
		)
	);
};

export default LogoutButton;
