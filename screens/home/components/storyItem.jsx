import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { colors, spaces } from '../../../assets/values';

const StoryItem = ({ item, index, onPress }) => {
	const [seen, setSeen] = useState(false);

	return (
		<TouchableOpacity
			onPress={() => {
				onPress();
				setSeen(true);
			}}
			style={[
				styles.storyItemContainer,
				index === 0 ? { marginLeft: spaces.sm } : null,
			]}>
			<Avatar
				source={require('../../../assets/images/storyIcon.png')}
				rounded
				avatarStyle={!seen ? styles.notSeen : null}
				containerStyle={styles.containerStyle}
			/>
		</TouchableOpacity>
	);
};

export default StoryItem;

const styles = StyleSheet.create({
	storyItemContainer: {
		width: 60,
		marginRight: spaces.md,
		marginVertical: spaces.sm,
	},
	containerStyle: {
		width: 60,
		height: 60,
	},
	notSeen: {
		borderRadius: 50,
		borderWidth: 2,
		borderColor: colors.blue,
	},
});
