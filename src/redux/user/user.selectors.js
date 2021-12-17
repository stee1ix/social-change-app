import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectAuthenticated = createSelector(
	[selectUser],
	user => user.authenticated
);
