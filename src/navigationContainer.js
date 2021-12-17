import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider, QueryClient } from 'react-query';
import LoginScreen from './screens/login/login.screen';
import RegisterScreen from './screens/register/register.screen';
import HomeDrawer from './screens/home/home.drawer';
import { selectAuthenticated } from './redux/user/user.selectors';
import { connect } from 'react-redux';
import { toggleAuthenticated } from './redux/user/user.actions';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

const NavContainer = ({ authenticated, toggleAuthenticated }) => {
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
	toggleAuthenticated: () => dispatch(toggleAuthenticated()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);
