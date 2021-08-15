import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login/login.screen';
import RegisterScreen from './screens/register/register.screen';
import HomeDrawer from './screens/home/home.drawer';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName="LoginScreen"
						screenOptions={{ headerShown: false }}>
						<Stack.Screen
							name="LoginScreen"
							component={LoginScreen}
						/>
						<Stack.Screen
							name="RegisterScreen"
							component={RegisterScreen}
						/>
						<Stack.Screen
							name="HomeDrawer"
							component={HomeDrawer}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</>
	);
}
