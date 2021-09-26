import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider, QueryClient } from 'react-query';
import LoginScreen from './screens/login/login.screen';
import RegisterScreen from './screens/register/register.screen';
import HomeDrawer from './screens/home/home.drawer';
import { selectAuthenticated } from './redux/user/user.selectors';
import { connect } from 'react-redux';
import * as SecureStore from 'expo-secure-store';
import { toggleAuthenticated } from './redux/user/user.actions';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

const NavContainer = ({ authenticated, toggleAuthenticated }) => {
	async function getAuthenticatedUser(key) {
		const user = await SecureStore.getItemAsync(key);

		if (user != null) {
			const data = JSON.parse(user);
			// setting user in redux
			await toggleAuthenticated({
				username: data.username,
				authToken: data.authToken,
				authenticated: true,
			});
		} else {
			// setting no user in redux
			await toggleAuthenticated({
				username: '',
				authToken: '',
				authenticated: false,
			});
		}
	}

	useEffect(() => {
		getAuthenticatedUser('user');
	}, []);

	console.log(authenticated ? 'Logged In' : 'Not Logged In');

	return (
		<NavigationContainer>
			<QueryClientProvider client={queryClient}>
				<Stack.Navigator
					initialRouteName="LoginScreen"
					screenOptions={{ headerShown: false }}>
					{/* add a splash screen when authenticated is null */}
					{!authenticated ? (
						<>
							<Stack.Screen
								name="LoginScreen"
								component={LoginScreen}
							/>
							<Stack.Screen
								name="RegisterScreen"
								component={RegisterScreen}
							/>
						</>
					) : (
						<Stack.Screen
							name="HomeDrawer"
							component={HomeDrawer}
						/>
					)}
				</Stack.Navigator>
			</QueryClientProvider>
		</NavigationContainer>
	);
};

const mapStateToProps = state => ({
	authenticated: selectAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
	toggleAuthenticated: userAuthObject =>
		dispatch(toggleAuthenticated(userAuthObject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
