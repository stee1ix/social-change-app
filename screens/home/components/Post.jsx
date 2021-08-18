import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { spaces } from '../../../assets/values';
import { FontAwesome, Feather } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const Post = () => {
	const [liked, setliked] = useState(true);

	return (
		<View style={styles.container}>
			<View style={styles.topbarWrapper}>
				<Image
					source={require('../../../assets/images/storyIcon.png')}
					style={styles.icon}
				/>
				<Text style={styles.username}>user_123</Text>
			</View>
			<Image
				source={require('../../../assets/images/post.png')}
				style={styles.image}
			/>
			<View style={styles.optionsWrapper}>
				<TouchableOpacity
					onPress={() => setliked(!liked)}
					style={{ marginHorizontal: spaces.sm }}>
					{liked ? (
						<FontAwesome name="heart" size={24} color="red" />
					) : (
						<FontAwesome name="heart-o" size={24} color="black" />
					)}
				</TouchableOpacity>
				<Text>67 likes</Text>
				<TouchableOpacity style={{ marginHorizontal: spaces.sm }}>
					<Feather name="message-circle" size={24} color="black" />
				</TouchableOpacity>
			</View>
			<View style={styles.captionWrapper}>
				<Text style={styles.captionText}>
					Hobby projects and how they helped him in cracking
					interviews. Rachit goes on to explain how once can go about
				</Text>
			</View>
		</View>
	);
};

export default Post;

const styles = StyleSheet.create({
	container: {
		// borderTopWidth: 1,
		// borderBottomWidth: 1,
		margin: spaces.sm,
		marginBottom: spaces.lg,
		// borderColor: 'black',
		// borderWidth: 1,
	},
	topbarWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		borderRadius: 50,
		width: 30,
		height: 30,
		marginHorizontal: spaces.sm,
		// marginVertical: spaces.sm,
	},
	username: {},
	image: {
		width: '100%',
		height: width,
		resizeMode: 'contain',
		borderRadius: spaces.sm,
	},
	optionsWrapper: {
		flexDirection: 'row',
		paddingVertical: spaces.sm,
		alignItems: 'center',
	},
	captionWrapper: {
		paddingHorizontal: spaces.sm,
	},
	captionText: {},
});
