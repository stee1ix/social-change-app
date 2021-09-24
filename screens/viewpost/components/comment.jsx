import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spaces } from '../../../assets/values';

const Comment = () => {
	return (
		<View style={styles.commentWrapper}>
			<Text style={styles.commentText}>
				<Text style={styles.commentUsername}>username </Text>
				This is a comment. It is a test comment so just ignore it. Don't
				take it seriously.
			</Text>
		</View>
	);
};

export default Comment;

const styles = StyleSheet.create({
	commentWrapper: {
		flexDirection: 'row',
		marginBottom: spaces.ssm,
	},
	commentUsername: {
		fontWeight: 'bold',
	},
	commentText: {},
});
