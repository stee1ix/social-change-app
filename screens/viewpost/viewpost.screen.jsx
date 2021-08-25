import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { spaces } from '../../assets/values';
import {
	FontAwesome,
	Feather,
	MaterialCommunityIcons,
} from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const ViewPost = () => {
	const [liked, setliked] = useState(true);

	return (
		<ScrollView
			style={styles.container}
			showsVerticalScrollIndicator={false}>
			<Image
				source={require('../../assets/images/post.png')}
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
		</ScrollView>
	);
};

export default ViewPost;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: spaces.sm,
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
		marginHorizontal: spaces.ssm,
	},
	captionText: {},
});
