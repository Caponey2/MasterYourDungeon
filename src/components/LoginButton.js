import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0();

	const audio = new Audio(
		require('../audio/zapsplat_sound_design_whoosh_flames_fire_into_airy_tail_cinematic_001_62047.mp3')
	);
	const start = () => {
		audio.play();
	};

	const clickHandler = () => {
		start();
		loginWithRedirect();
	};
	return (
		<button onClick={() => clickHandler()}>
			<img
				src={require('../images/pinpng.com-portal-png-494723.png')}
				alt='Enter Within'
			/>
		</button>
	);
};

export default LoginButton;
