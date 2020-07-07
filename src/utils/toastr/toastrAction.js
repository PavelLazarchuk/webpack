import { toastr } from 'react-redux-toastr';

const toastrAction = (requestData, msg) => {
	const message = requestData.message || msg;

	requestData.statusText.toLowerCase() === 'success'
		? message && toastr.success('Success', message)
		: toastr.error(`Error ${requestData.status}`, requestData.message);
};

export default toastrAction;
