import { GET } from 'utils/constants/method';
import actionFactory from 'utils/actions/actionFactory';
import { SUCCESS_CATEGORY, SET_CATEGORY } from './types';
import actionApiFactory from 'utils/actions/actionWithApiFactory';

const getAll = actionFactory(SUCCESS_CATEGORY);
const setCategor = actionFactory(SET_CATEGORY);

export const getAllCategory = actionApiFactory('categories', GET, getAll);
export const setCategory = name => dispatch => dispatch(setCategor(name));
