import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableNativeFeedback,
	Image,
	Dimensions,
	ScrollView,
} from 'react-native';
import { Button, TextInput, FAB, Portal } from 'react-native-paper';
import { colors, spaces, font } from '../../assets/values';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const AddPost = () => {
	const [imageSelected, setImageSelected] = useState(false);

	// FAB state
	const [imageSelectFabVisible, setImageSelectFabVisible] = useState({
		open: false,
	});

	const onImageSelectFabVisibleChange = ({ open }) =>
		setImageSelectFabVisible({ open });

	const { open } = imageSelectFabVisible;
	// FAB state

	return (
		<>
			<ScrollView style={styles.container}>
				<View style={styles.headerWrapper}></View>
				<TextInput
					mode="flat"
					style={styles.captionInput}
					// underlineColor="transparent"
					multiline={true}
					autoFocus={true}
					theme={{ colors: { primary: colors.blue } }}
					placeholder="Write caption here..."
					selectionColor={colors.blue}
				/>
				<View style={styles.imageWrapper}>
					{!imageSelected ? (
						<Ionicons
							name="camera-outline"
							size={300}
							color="#c9c9c9"
							style={styles.dummyImage}
						/>
					) : (
						<Image
							source={require('../../assets/images/post.png')}
							style={styles.imageStyle}
						/>
					)}
				</View>

				<View style={{ height: spaces.sm }} />
			</ScrollView>
			<FAB.Group
				open={open}
				icon="image"
				actions={[
					{
						icon: 'camera',
						onPress: () => {},
					},
					{
						icon: 'folder-image',
						onPress: () => {},
						small: false,
					},
				]}
				color="#fff"
				onStateChange={onImageSelectFabVisibleChange}
				// onPress={() => {}}
				style={styles.fabIconContainer}
				fabStyle={styles.imagePickFab}
			/>
		</>
	);
};

export default AddPost;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1,
		paddingHorizontal: spaces.sm,
	},
	headerWrapper: {
		marginVertical: spaces.ssm,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	submitButton: {
		backgroundColor: colors.blue,
	},
	headerText: {
		fontSize: font.xl,
		marginVertical: spaces.sm,
	},
	captionInput: {
		backgroundColor: '#fff',
		paddingHorizontal: -spaces.sm,
	},
	imageWrapper: {
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: spaces.md,
	},
	dummyImage: {},
	imageStyle: {
		width: '100%',
		height: width - spaces.sm - spaces.sm,
		borderRadius: spaces.smd,
	},
	fabIconContainer: {
		paddingBottom: spaces.sm,
	},
	imagePickFab: {
		backgroundColor: colors.blue,
	},
});
