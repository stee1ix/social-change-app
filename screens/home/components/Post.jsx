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
				<Text style={styles.text}>user_123</Text>
			</View>
			<Image
				source={require('../../../assets/images/post.png')}
				style={styles.image}
			/>
			<View style={styles.optionsWrapper}>
				<TouchableOpacity onPress={() => setliked(!liked)}>
					{liked ? (
						<FontAwesome name="heart" size={24} color="red" />
					) : (
						<FontAwesome name="heart-o" size={24} color="black" />
					)}
				</TouchableOpacity>
				<Text>67 likes</Text>
				<Feather name="message-circle" size={24} color="black" />
			</View>
			<Text>
				Hobby projects and how they helped him in cracking interviews.
				Rachit goes on to explain how once can go about
			</Text>
		</View>
	);
};

export default Post;

const styles = StyleSheet.create({
	container: {
		// borderTopWidth: 1,
		// borderBottomWidth: 1,
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
	},
	text: {},
	image: {
		width: width,
		height: width,
		resizeMode: 'contain',
	},
	optionsWrapper: {
		flexDirection: 'row',
	},
});
