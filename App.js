import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login/login.screen';
import HomeScreen from './screens/home/home.screen';
import RegisterScreen from './screens/register/register.screen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="light" />
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
							name="HomeScreen"
							component={HomeScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</>
	);
}
