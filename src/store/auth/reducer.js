import { getUser } from './helpers';
import { SET_USER, ERROR, LOGOUT, SUCCESS, CLEAR, SET_ADMIN } from './types';

const initialState = {
	isAuthenticated: localStorage.token ? true : false,
	isAdmin: localStorage.adminToken ? true : false,
	user: getUser(localStorage.token),
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				error: null,
				isAuthenticated: true,
				user: action.payload,
			};
		case SET_ADMIN:
			return {
				...state,
				error: null,
				isAdmin: true,
				user: action.payload,
			};
		case ERROR:
			return {
				...state,
				error: action.payload,
			};

		case LOGOUT:
			return {
				...state,
				user: null,
				isAdmin: false,
				isAuthenticated: false,
			};

		case CLEAR:
			return {
				...state,
				error: null,
			};

		case SUCCESS:
			return {
				...state,
				error: null,
				success: action.payload,
			};
		default:
			return state;
	}
};
