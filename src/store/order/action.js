import { toastr } from 'react-redux-toastr';
import { POST } from 'utils/constants/method';
import actionFactory from 'utils/actions/actionFactory';
import actionApiFactory from 'utils/actions/actionWithApiFactory';
import { ADD_PRODUCT, CLEAN_ORDER, CHANGE_ORDER, ADD_ORDER } from './types';

const addOrder = actionFactory(ADD_ORDER);
const change = actionFactory(CHANGE_ORDER);
const addProduct = actionFactory(ADD_PRODUCT);

export const addToOrder = (arr, data) => dispatch => {
	const index = arr.find(el => el.id === data.id);
	if (index) {
		toastr.info('This product is already in the cart');
	} else {
		dispatch(addProduct(data));
	}
};

export const deleteItem = (id, arr) => dispatch => {
	const index = arr.findIndex(el => el.id === id);
	if (index >= 0) {
		const newArr = arr.filter((el, i) => i !== index);
		dispatch(change(newArr));
	}
};

export const updateItem = (id, arr, value) => dispatch => {
	const index = arr.findIndex(el => el.id === id);
	if (index >= 0) {
		arr[index].quantity = value;
		const newArr = arr.map((elem, i) => {
			if (i === index) elem.quantity = value;
			return elem;
		});
		dispatch(change(newArr));
	}
};

export const postOrder = actionApiFactory('orders', POST, addOrder);
export const cleanOrder = () => dispatch => dispatch({ type: CLEAN_ORDER });
