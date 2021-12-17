import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { font, spaces } from '../../../assets/values';

const Header = () => {
	return (
		<View style={styles.header}>
			<TouchableOpacity style={styles.icon}>
				<MaterialCommunityIcons name="menu" size={30} color="black" />
			</TouchableOpacity>
			<View>
				<Text style={styles.headerText}>SOCIAL CHANGE</Text>
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerText: {
		fontSize: font.xl,
	},
	icon: {
		position: 'absolute',
		left: 0,
	},
});
