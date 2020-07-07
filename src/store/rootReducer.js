import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import authReducer from './auth/reducer';
import orderReducer from './order/reducer';
import themeReducer from './theme/reducer';
import adminReducer from './admin/reducer';
import commentReducer from './comment/reducer';
import productReducer from './product/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	order: orderReducer,
	admin: adminReducer,
	theme: themeReducer,
	toastr: toastrReducer,
	comment: commentReducer,
	product: productReducer,
});

export default rootReducer;
