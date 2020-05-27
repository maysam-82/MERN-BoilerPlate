import axios from 'axios';
import * as actionTypes from './actionTypes';

export const signup = ({ email, password }) => async (dispatch) => {
	// redux-thunk allows us to get total control over the dispatch process.
	// indise of one actionCreator we can dispatch as many actions as we want or dispatch them at any time we wish.
	try {
		const response = axios.post('http://localhost:3090/signup', {
			email,
			password,
		});
		dispatch({
			type: actionTypes.AUTH_USER,
			payload: response.data.token,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.AUTH_ERROR,
			payload: 'Email in use.',
		});
	}
};
