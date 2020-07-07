import { ERROR } from 'utils/actions/errorAxios';
import { SUCCESS_AXIOS, ADD_COMMENT } from './types';
import { CLEAN_PRODUCT, GET_ONE_PRODUCT } from '../product/types';

const initialState = {
	comments: [],
	error: '',
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_AXIOS:
			return {
				...state,
				isError: false,
				comments: action.payload,
			};

		case GET_ONE_PRODUCT:
			return {
				...state,
				isError: false,
				comments: action.payload.comments,
			};

		case CLEAN_PRODUCT:
			return {
				...state,
				comments: [],
				isError: false,
			};

		case ADD_COMMENT:
			return {
				...state,
				isError: false,
				comments: [...state.comments, action.payload],
			};

		case ERROR:
			return {
				...state,
				isError: true,
				error: action.payload,
			};

		default:
			return state;
	}
};
