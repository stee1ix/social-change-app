import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import { Menu, TouchableRipple } from 'react-native-paper';
import { spaces } from '../../../assets/values';
import {
	FontAwesome,
	Feather,
	MaterialCommunityIcons,
} from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const Post = ({ onPress, id }) => {
	const [liked, setliked] = useState(true);
	const [menuVisible, setMenuVetvisible] = useState(false);

	const openMenu = () => setMenuVetvisible(true);

	const closeMenu = () => setMenuVetvisible(false);

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

				<Menu
					visible={menuVisible}
					onDismiss={closeMenu}
					anchor={
						<TouchableRipple
							onPress={openMenu}
							borderless={true}
							style={styles.postOptionsIcon}>
							<MaterialCommunityIcons
								name="dots-vertical"
								size={20}
								color="black"
								style={styles.postOptionsIcon}
							/>
						</TouchableRipple>
					}>
					<Menu.Item onPress={() => {}} title="Edit" />
					<Menu.Item onPress={() => {}} title="Delete" />
				</Menu>
			</View>
			<TouchableWithoutFeedback onPress={onPress}>
				<Image
					// source={require('../../../assets/images/post.png')}
					source={{ uri: `https://picsum.photos/id/${id}/300` }}
					style={styles.image}
				/>
			</TouchableWithoutFeedback>
			<View style={styles.optionsWrapper}>
				<TouchableOpacity
					onPress={() => setliked(!liked)}
					style={{ marginHorizontal: spaces.ssm }}>
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
		paddingVertical: spaces.ssm,
	},
	usernameImageWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		borderRadius: 50,
		width: 30,
		height: 30,
		marginHorizontal: spaces.ssm,
	},
	username: {},
	postOptionsIcon: {
		paddingLeft: spaces.sm,
		// borderWidth: 1,
		borderRadius: 50,
	},
	image: {
		width: '100%',
		height: width,
		resizeMode: 'contain',
		borderRadius: spaces.ssm,
	},
	optionsWrapper: {
		flexDirection: 'row',
		paddingVertical: spaces.sm,
		alignItems: 'center',
	},
	captionWrapper: {
		paddingHorizontal: spaces.ssm,
	},
	captionText: {},
});
