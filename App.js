import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClientProvider, QueryClient } from 'react-query';
import LoginScreen from './screens/login/login.screen';
import RegisterScreen from './screens/register/register.screen';
import HomeDrawer from './screens/home/home.drawer';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

export default function App() {
	const [auth, setAuth] = useState(false);

	return (
		<>
			<StatusBar style="dark" backgroundColor="#fff" />
			<SafeAreaProvider>
				<PaperProvider>
					<NavigationContainer>
						<QueryClientProvider client={queryClient}>
							<Stack.Navigator
								initialRouteName="LoginScreen"
								screenOptions={{ headerShown: false }}>
								{!auth ? (
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
				</PaperProvider>
			</SafeAreaProvider>
		</>
	);
}
