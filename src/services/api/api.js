import axios from 'axios';
import { toastr } from 'react-redux-toastr';

import { GET, PUT, POST, DELETE } from 'utils/constants/method';

const BASE_URL = 'http://localhost:5000/'; // https://heroku-market-place.herokuapp.com/

class API {
	get(url, body, headers) {
		return this.makeRequest(url, GET, body, headers);
	}

	post(url, body, headers) {
		return this.makeRequest(url, POST, body, headers);
	}

	put(url, body, headers) {
		return this.makeRequest(url, PUT, body, headers);
	}

	delete(url, body, headers) {
		return this.makeRequest(url, DELETE, body, headers);
	}

	makeRequest(url, method, body, headers) {
		const requestParams = {
			method: method || GET,
			data: body,
			headers: {
				...(headers || {}),
			},
		};
		if (method === POST || method === PUT) {
			requestParams.headers['Content-Type'] = 'application/json';
		}
		return this.sendRequest(url, requestParams);
	}

	sendRequest(url, requestParams) {
		return new Promise((resolve, reject) => {
			axios(`${BASE_URL + url}`, requestParams)
				.then(result => {
					resolve(result.data);
				})
				.catch(reason => {
					this.requestFailed(reason);
					reject(reason);
				});
		});
	}

	requestFailed(reason) {
		if (reason && reason.message) {
			toastr.error('ERROR', reason.message);
		} else {
			toastr.error('ERROR', 'An error has occurred');
		}
	}
}

export default new API();
