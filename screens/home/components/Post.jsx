import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
	TouchableHighlight,
	TouchableWithoutFeedback,
} from 'react-native';
import { spaces } from '../../../assets/values';
import {
	FontAwesome,
	Feather,
	MaterialCommunityIcons,
} from '@expo/vector-icons';
import { TouchableRipple } from 'react-native-paper';

const width = Dimensions.get('window').width;

const Post = ({ onPress }) => {
	const [liked, setliked] = useState(true);

	return (
		<View style={styles.container}>
			<View style={styles.topbarWrapper}>
				<View style={styles.usernameImageWrapper}>
					<Image
						source={require('../../../assets/images/storyIcon.png')}
						style={styles.icon}
					/>
					<Text style={styles.username}>user_123</Text>
				</View>
				<TouchableOpacity
					onPress={() => null}
					style={styles.postOptionsIcon}>
					<View>
						<MaterialCommunityIcons
							name="dots-vertical"
							size={20}
							color="black"
						/>
					</View>
				</TouchableOpacity>
			</View>
			<TouchableWithoutFeedback onPress={onPress}>
				<Image
					source={require('../../../assets/images/post.png')}
					style={styles.image}
				/>
			</TouchableWithoutFeedback>
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
		margin: spaces.sm,
		marginBottom: spaces.lg,
	},
	topbarWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	usernameImageWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		borderRadius: 50,
		width: 30,
		height: 30,
		marginHorizontal: spaces.sm,
	},
	username: {},
	postOptionsIcon: {
		paddingLeft: 20,
		// borderWidth: 1,
	},
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
