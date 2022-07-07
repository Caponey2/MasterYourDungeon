import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
// require('dotenv').config();
// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const domain = 'dev-w57t46ls.us.auth0.com';
const clientId = 'zqufC0zcPMb9GLowa70dsl4EUigSBtc7';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
		domain={domain}
		clientId={clientId}
		redirectUri='http://localhost:8080/user'>
		<App />
	</Auth0Provider>
);
