import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/login/login.screen';
import HomeScreen from './screens/home/home.screen';
import RegisterScreen from './screens/register/register.screen';
import Header from './screens/home/components/Header';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator initialRouteName="LoginScreen">
						<Stack.Screen
							name="LoginScreen"
							component={LoginScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="RegisterScreen"
							component={RegisterScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="HomeScreen"
							component={HomeScreen}
							options={{
								// headerTitle: 'Social Change',
								headerBackVisible: false,
								headerTitle: () => <Header />,
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</>
	);
}
