import {
	CLEAN_LIST,
	CLEAN_PRODUCT,
	GET_ONE_PRODUCT,
	GET_ALL_PRODUCT,
	GET_PRODUCT_LIST,
} from './types';
import { GET } from 'utils/constants/method';
import actionFactory from 'utils/actions/actionFactory';
import actionApiFactory from 'utils/actions/actionWithApiFactory';

const getAll = actionFactory(GET_ALL_PRODUCT);
const getProduct = actionFactory(GET_ONE_PRODUCT);
const getProducts = actionFactory(GET_PRODUCT_LIST);

export const getAllProduct = actionApiFactory('products', GET, getAll);
export const getOneProduct = actionApiFactory('products/', GET, getProduct);
export const cleanProductList = () => dispatch => dispatch({ type: CLEAN_LIST });
export const getProductByFilter = actionApiFactory('products?', GET, getProducts);
export const cleanOneProduct = () => dispatch => dispatch({ type: CLEAN_PRODUCT });
