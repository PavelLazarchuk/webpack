import API from 'services/api';
import setAuthToken from 'utils/setAuthToken';
import toastr from 'utils/toastr/toastrAction';
import actionFactory from 'utils/actions/actionFactory';
import { ERROR, LOGOUT, SUCCESS, CLEAR } from './types';
import { setCurrentUser, setCurrentAdmin } from './helpers';

const error = actionFactory(ERROR);
const clearMsg = actionFactory(CLEAR);
const success = actionFactory(SUCCESS);

export const registerUser = (user, history) => dispatch => {
	API.post('register', user)
		.then(data => {
			if (data.errors) {
				dispatch(error(data.errors));
			} else {
				dispatch(success(data));
				history.push('/login');
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};

export const loginUser = (user, history) => dispatch => {
	API.post('login', user)
		.then(data => {
			if (data.token) {
				const { token } = data;
				localStorage.setItem('token', token);
				setAuthToken(token);
				dispatch(setCurrentUser(token));
				history.push('/seller');
				return;
			} else {
				toastr(data);
			}
		})
		.catch(err => {
			dispatch(error(err));
		});
};

export const loginAdmin = user => dispatch => {
	API.post('admin', user)
		.then(data => {
			if (data.token) {
				const { token } = data;
				localStorage.setItem('adminToken', token);
				setAuthToken(localStorage.adminToken);
				dispatch(setCurrentAdmin(token));
				return;
			} else {
				toastr(data);
			}
		})
		.catch(err => {
			dispatch(error(err));
		});
};

export const logOutAdmin = history => dispatch => {
	dispatch({ type: LOGOUT });
	setAuthToken();
	localStorage.removeItem('adminToken');
	history.push('/admin');
};

export const logOut = history => dispatch => {
	dispatch({ type: LOGOUT });
	setAuthToken();
	localStorage.removeItem('token');
	history.push('/login');
};

export const emailConfirm = (body, history) => dispatch => {
	API.post('mailconfirm', body)
		.then(data => {
			if (data.statusText === 'success') {
				dispatch(success(data));
				history.push('/login');
			} else {
				dispatch(error(data));
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};

export const setPass = (data, history) => dispatch => {
	API.post('setpassword', data)
		.then(data => {
			if (data.statusText === 'success') {
				dispatch(success(data));
				history.push('/login');
			} else {
				dispatch(error(data));
			}
			setTimeout(() => dispatch(clearMsg()), 3000);
		})
		.catch(err => {
			dispatch(error(err));
		});
};
