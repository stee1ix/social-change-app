import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home.screen';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spaces } from '../../assets/values';

const Tab = createBottomTabNavigator();

const ProfileScreen = () => <Text>ProfileScreen</Text>;
const SearchScreen = () => <Text>SearchScreen</Text>;

const HomeNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeScreen"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'HomeScreen') {
						iconName = focused ? 'home' : 'home-outline';
					} else if (route.name === 'SearchScreen') {
						iconName = focused ? 'search-sharp' : 'search-outline';
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
			})}>
			<Tab.Screen name="HomeScreen" component={HomeScreen} />
			<Tab.Screen name="SearchScreen" component={SearchScreen} />
			<Tab.Screen name="ProfileScreen" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default HomeNavigator;
