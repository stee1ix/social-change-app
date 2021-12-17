const INITIAL_STATE = {
	authenticated: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'TOGGLE_AUTHENTICATED':
			return {
				...state,
				authenticated: !state.authenticated,
			};

		default:
			return state;
	}
};

export default userReducer;
