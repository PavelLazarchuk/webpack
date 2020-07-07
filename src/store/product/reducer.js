import { ERROR } from 'utils/actions/errorAxios';
import {
	CLEAN_LIST,
	CLEAN_PRODUCT,
	GET_ONE_PRODUCT,
	GET_ALL_PRODUCT,
	GET_PRODUCT_LIST,
} from './types';

const initialState = {
	product: null,
	allProduct: [],
	productList: null,
	addProduct: null,
	error: null,
	isError: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCT_LIST:
			return {
				...state,
				isError: false,
				productList: action.payload,
			};

		case CLEAN_LIST:
			return {
				...state,
				productList: null,
			};

		case GET_ALL_PRODUCT:
			return {
				...state,
				isError: false,
				allProduct: action.payload,
			};

		case GET_ONE_PRODUCT:
			return {
				...state,
				isError: false,
				product: action.payload,
			};

		case CLEAN_PRODUCT:
			return {
				...state,
				product: null,
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
