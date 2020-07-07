import { CHANGE_TO_LIGHT, CHANGE_TO_DARK } from './types';

export const changeToDark = () => dispatch => dispatch({ type: CHANGE_TO_DARK });
export const changeToLight = () => dispatch => dispatch({ type: CHANGE_TO_LIGHT });
