import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	return (
		<button onClick={() => loginWithRedirect()}>
			<img
				src={require('../images/pinpng.com-portal-png-494723.png')}
				alt='Enter Within'
			/>
		</button>
	);
};

export default LoginButton;
