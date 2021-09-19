import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Button, TextInput, FAB, Portal } from 'react-native-paper';
import { colors, spaces, font } from '../../assets/values';
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const AddPost = ({ navigation }) => {
	const [imageSelected, setImageSelected] = useState(false);

	// FAB state
	const [imageSelectFabVisible, setImageSelectFabVisible] = useState({
		open: false,
	});

	const onImageSelectFabVisibleChange = ({ open }) =>
		setImageSelectFabVisible({ open });

	const { open } = imageSelectFabVisible;
	// FAB state

	//changing header bar right icon from chat to tick
	useEffect(() => {
		console.log('Mounted');
		navigation.getParent().setOptions({
			headerRight: () => (
				<TouchableOpacity
					style={{ marginRight: spaces.sm }}
					onPress={() => {}}>
					<Ionicons
						name="md-checkmark-sharp"
						size={26}
						color={colors.blue}
					/>
				</TouchableOpacity>
			),
		});

		return () => {
			console.log('Unmounted');
			navigation.getParent().setOptions({
				headerRight: () => (
					<TouchableOpacity
						style={{ marginRight: spaces.sm }}
						onPress={() => {}}>
						<Ionicons
							name="chatbox-ellipses-outline"
							size={26}
							color="black"
						/>
					</TouchableOpacity>
				),
			});
		};
	}, []);

	return (
		<>
			<ScrollView style={styles.container}>
				<View style={styles.headerWrapper}></View>
				<TextInput
					mode="outlined"
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
						<Feather
							name="upload"
							size={300}
							color="#e9e9e9"
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
	},
	headerWrapper: {
		// marginVertical: spaces.ssm,
		// flexDirection: 'row',
		// justifyContent: 'space-between',
		// alignItems: 'center',
	},
	submitButton: {
		backgroundColor: colors.blue,
	},
	captionInput: {
		backgroundColor: '#fff',
		// paddingHorizontal: -spaces.sm,
		marginHorizontal: spaces.sm,
		marginTop: spaces.sm,
	},
	imageWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
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
