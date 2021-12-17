import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import { Surface } from 'react-native-paper';
import { colors, font, spaces } from '../../assets/values';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const SettingsScreen = () => {
	return (
		<View style={styles.settingsWrapper}>
			<Text style={styles.infoText}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
				ab doloribus nobis nesciunt soluta repellendus dolore possimus
				veritatis mollitia libero, animi, praesentium excepturi
				distinctio est quibusdam odio quisquam officia quo.
			</Text>
			<TouchableNativeFeedback>
				<Surface style={styles.optionWrapper}>
					<Ionicons name="ios-key" size={24} color={colors.blue} />
					<Text style={styles.optionText}>Change Password</Text>
				</Surface>
			</TouchableNativeFeedback>
			<TouchableNativeFeedback>
				<Surface style={styles.optionWrapper}>
					<MaterialCommunityIcons
						name="delete-outline"
						size={24}
						color="red"
					/>
					<Text style={styles.optionText}>Delete Account</Text>
				</Surface>
			</TouchableNativeFeedback>
		</View>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	settingsWrapper: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: spaces.sm,
	},
	infoText: {
		color: 'gray',
		marginVertical: spaces.sm,
	},
	optionWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		elevation: 3,
		height: 50,

		marginVertical: spaces.sm,
		borderRadius: 10,
		paddingHorizontal: spaces.sm,
	},
	optionText: {
		fontSize: font.md,
		marginLeft: spaces.sm,
	},
});
