const INITIAL_STATE = {
	authenticated: null,
	username: '',
	authToken: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'TOGGLE_AUTHENTICATED':
			return {
				...state,
				authenticated: action.payload.authenticated,
				username: state.username === '' ? action.payload.username : '',
				authToken:
					state.authToken === '' ? action.payload.authToken : '',
			};

		// case 'SET_USERNAME':
		// 	return {
		// 		...state,
		// 		username: action.payload,
		// 	};

		default:
			return state;
	}
};

export default userReducer;
