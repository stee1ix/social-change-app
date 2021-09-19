import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home.screen';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spaces } from '../../assets/values';
import ProfileScreen from '../profile/profile.screen';
import AddPost from '../addPost/addPost.screen';
import HomeStack from './home.stack';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeScreen"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === 'HomeStack') {
						iconName = focused ? 'home-sharp' : 'home-outline';
					} else if (route.name === 'ProfileScreen') {
						iconName = focused
							? 'ios-person-sharp'
							: 'ios-person-outline';
					} else if (route.name === 'AddPost') {
						iconName = focused
							? 'ios-add-circle-sharp'
							: 'ios-add-circle-outline';
						size = 35;
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
			<Tab.Screen name="HomeStack" component={HomeStack} />
			<Tab.Screen
				name="AddPost"
				component={AddPost}
				options={{
					unmountOnBlur: true,
					// tabBarIcon: () => (
					// 	<Ionicons
					// 		name="add-circle-outline"
					// 		size={50}
					// 		color={colors.blue}
					// 	/>
					// ),
					// tabBarIconStyle: { top: -20 },
				}}
			/>
			<Tab.Screen name="ProfileScreen" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

export default HomeNavigator;

const styles = StyleSheet.create({
	tabBarStyle: {
		// position: 'absolute',
		height: 60,
		// right: spaces.sm,
		// left: spaces.sm,
		// bottom: spaces.sm,
		// borderRadius: 10,
	},
});
