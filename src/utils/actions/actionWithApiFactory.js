import API from 'services/api';
import { toastr } from 'react-redux-toastr';
import errorAxios from 'utils/actions/errorAxios';
import tostrActions from 'utils/toastr/toastrAction';

const actionApiFactory = (url, method, action, msg) => (params, body, headers) => dispatch => {
	const UPL = params ? `${url}${params}` : url;
	const successRequest = data => {
		tostrActions(data, msg);
		action && dispatch(action(data.result));
	};

	return API[method](UPL, body, headers)
		.then(data => {
			data.statusText === 'error'
				? toastr.error(`ERROR ${data.status}`, data.message)
				: successRequest(data);
		})
		.catch(error => {
			dispatch(errorAxios(error));
		});
};

export default actionApiFactory;
