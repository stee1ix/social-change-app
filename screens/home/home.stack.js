import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './home.screen';
import ViewPost from '../viewpost/viewpost.screen';
import StoryView from '../storyview/storyview.screen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
	return (
		<>
			<Stack.Navigator
				initialRouteName="HomeScreen"
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="StoryView" component={StoryView} />
				<Stack.Screen name="ViewPost" component={ViewPost} />
			</Stack.Navigator>
		</>
	);
}
