import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors, spaces } from '../../assets/values';

const SearchScreen = () => {
	return (
		<View style={styles.container}>
			<TextInput
				mode="outlined"
				placeholder="Search Users"
				style={styles.inputBox}
				theme={{ colors: { primary: colors.blue } }}
			/>
		</View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: spaces.sm,
		paddingTop: spaces.sm,
	},
	inputBox: {
		backgroundColor: '#fff',
	},
});
