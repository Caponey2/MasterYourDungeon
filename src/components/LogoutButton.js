import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
	const { logout, isAuthenticated } = useAuth0();

	return (
		isAuthenticated && (
			<button
				className=' hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium'
				onClick={() => logout()}>
				<p>Flee through the portal</p>
			</button>
		)
	);
};

export default LogoutButton;
