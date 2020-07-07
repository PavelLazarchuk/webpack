import { GET } from 'utils/constants/method';
import actionFactory from 'utils/actions/actionFactory';
import { SUCCESS_SUBCATEGORY, SET_SUBCATEGORY } from './types';
import actionApiFactory from 'utils/actions/actionWithApiFactory';

const setSubcat = actionFactory(SET_SUBCATEGORY);
const getAll = actionFactory(SUCCESS_SUBCATEGORY);

export const setSubcategory = name => dispatch => dispatch(setSubcat(name));
export const getSubcategory = actionApiFactory('subCategories?', GET, getAll);
