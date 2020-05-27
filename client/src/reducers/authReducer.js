import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
	authenticated: '',
	errorMessage: '',
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.AUTH_USER:
			return { ...state, authenticated: action.payload };
		case actionTypes.AUTH_ERROR:
			return { ...state, errorMessage: action.payload };
		default:
			return state;
	}
};
