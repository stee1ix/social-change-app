import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavContainer from './navigationContainer';

export default function App() {
	return (
		<>
			<StatusBar style="dark" backgroundColor="transparent" />
			<Provider store={store}>
				<SafeAreaProvider>
					<PaperProvider>
						<NavContainer />
					</PaperProvider>
				</SafeAreaProvider>
			</Provider>
		</>
	);
}
