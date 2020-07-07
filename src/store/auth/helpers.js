import jwt_decode from 'jwt-decode';

import setAuthToken from 'utils/setAuthToken';
import { SET_USER, SET_ADMIN } from './types';

export const setCurrentUser = token => {
	const encryptId = token.slice(7);
	const id = jwt_decode(encryptId);
	return {
		type: SET_USER,
		payload: id,
	};
};

export const setCurrentAdmin = token => {
	const encryptId = token.slice(7);
	const id = jwt_decode(encryptId);
	return {
		type: SET_ADMIN,
		payload: id,
	};
};

export const getUser = token => {
	if (token) {
		const encryptId = token.slice(7);
		const id = jwt_decode(encryptId);
		setAuthToken(token);
		return id;
	} else {
		return null;
	}
};
