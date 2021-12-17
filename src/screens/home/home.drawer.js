import React from 'react';
import { Text, Dimensions, View, Image, LogBox } from 'react-native';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import HomeNavigator from './home.navigator';
import { colors, font, spaces } from '../../assets/values';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import SettingScreen from '../settings/settings.screen';
import EditScreen from '../edit/edit.screens';
import { TouchableOpacity } from 'react-native';
import SearchScreen from '../search/search.screen';
import { toggleAuthenticated } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.config';

LogBox.ignoreLogs(['Setting a timer']);
// LogBox.ignoreAllLogs();

const width = Dimensions.get('window').width;

const Drawer = createDrawerNavigator();

const LogoutOption = props => {
	const logout = async () => {
		await auth.signOut();
		props.toggleAuthenticated();
	};

	return (
		<DrawerContentScrollView
			{...props}
			contentContainerStyle={{
				flex: 1,
			}}>
			<DrawerItemList {...props} />
			<DrawerItem
				label={() => (
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-evenly',
						}}>
						<AntDesign name="logout" size={24} color="red" />
						<Text style={{ fontSize: font.lg }}>Logout</Text>
					</View>
				)}
				onPress={() => logout()}
				style={{
					flex: 1,
					justifyContent: 'flex-end',
				}}
			/>
		</DrawerContentScrollView>
	);
};

const Option = ({ title, icon }) => {
	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
			<Ionicons name={icon} size={24} color="black" />
			<Text style={{ marginLeft: spaces.md, fontSize: font.md }}>
				{title}
			</Text>
		</View>
	);
};

const HomeDrawer = ({ navigation, toggleAuthenticated }) => {
	return (
		<Drawer.Navigator
			initialRouteName="HomeNavigator"
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitle: 'SOCIAL CHANGE',
				drawerType: 'slide',
				drawerStyle: { width: width * 0.5 },
				headerRight: () => (
					<TouchableOpacity
						style={{ marginRight: spaces.sm }}
						onPress={() => navigation.navigate('ChatScreen')}>
						<Ionicons
							name="chatbox-ellipses-outline"
							size={26}
							color="black"
						/>
					</TouchableOpacity>
				),
			}}
			drawerContent={props => (
				<LogoutOption
					{...props}
					toggleAuthenticated={toggleAuthenticated}
				/>
			)}>
			<Drawer.Screen
				name="HomeNavigator"
				component={HomeNavigator}
				options={{
					drawerLabel: () => (
						<Option title="HOME" icon="home-sharp" />
					),
				}}
			/>
			<Drawer.Screen
				name="SearchScreen"
				component={SearchScreen}
				options={{
					drawerLabel: () => <Option title="SEARCH" icon="search" />,
				}}
			/>
			<Drawer.Screen
				name="EditScreen"
				component={EditScreen}
				options={{
					drawerLabel: () => (
						<Option title="EDIT PROFILE" icon="pencil-sharp" />
					),
				}}
			/>
			<Drawer.Screen
				name="SettingScreen"
				component={SettingScreen}
				options={{
					drawerLabel: () => (
						<Option title="SETTINGS" icon="settings-sharp" />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleAuthenticated: () => dispatch(toggleAuthenticated()),
});

export default connect(null, mapDispatchToProps)(HomeDrawer);
