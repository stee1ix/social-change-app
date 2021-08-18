import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home.screen';
import { Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spaces } from '../../assets/values';

const Tab = createBottomTabNavigator();

const ProfileScreen = () => <Text>ProfileScreen</Text>;
const CreatePost = () => <Text>CreatePost</Text>;

const HomeNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeScreen"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'HomeScreen') {
						iconName = focused ? 'home-sharp' : 'home-outline';
					} else if (route.name === 'ProfileScreen') {
						iconName = focused
							? 'ios-person-sharp'
							: 'ios-person-outline';
					}

					return (
						<Ionicons name={iconName} color={color} size={size} />
					);
				},
				tabBarActiveTintColor: colors.blue,
				tabBarHideOnKeyboard: true,
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: styles.tabBarStyle,
			})}>
			<Tab.Screen name="HomeScreen" component={HomeScreen} />
			<Tab.Screen
				name="CreatePost"
				component={CreatePost}
				options={{
					tabBarIcon: () => (
						<Ionicons
							name="add-circle"
							size={60}
							color={colors.blue}
						/>
					),
					tabBarIconStyle: { top: -20 },
				}}
			/>
			<Tab.Screen name="ProfileScreen" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default HomeNavigator;

const styles = StyleSheet.create({
	tabBarStyle: {
		position: 'absolute',
		height: 50,
		right: spaces.smd,
		left: spaces.smd,
		bottom: spaces.smd,
		borderRadius: 10,
	},
});
