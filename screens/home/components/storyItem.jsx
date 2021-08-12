import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { colors, spaces } from '../../../assets/values';

const StoryItem = ({ item, index }) => {
	const [seen, setSeen] = useState(false);

	return (
		<TouchableOpacity>
			<Avatar
				source={require('../../../assets/images/storyIcon.png')}
				rounded
				title="S"
				avatarStyle={styles.avatarStyle}
				containerStyle={[
					styles.containerStyle,
					index === 0 ? { marginLeft: spaces.sm } : null,
				]}
			/>
		</TouchableOpacity>
	);
};

export default StoryItem;

const styles = StyleSheet.create({
	containerStyle: {
		marginRight: spaces.md,
		width: 60,
		height: 60,
	},
	avatarStyle: {
		borderRadius: 50,
		borderWidth: 2,
		borderColor: colors.blue,
	},
});
