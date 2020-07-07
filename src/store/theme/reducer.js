import { CHANGE_TO_DARK, CHANGE_TO_LIGHT } from './types';

const initialState = {
	theme: localStorage.getItem('theme') || 'light',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_TO_DARK:
			return {
				...state,
				theme: 'dark',
			};
		case CHANGE_TO_LIGHT:
			return {
				...state,
				theme: 'light',
			};
		default:
			return state;
	}
};
