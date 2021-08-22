import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableNativeFeedback,
	Image,
	Dimensions,
	ScrollView,
} from 'react-native';
import { Button, TextInput, Surface } from 'react-native-paper';
import { colors, spaces, font } from '../../assets/values';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const AddPost = () => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.headerWrapper}>
				<Text style={styles.headerText}>Create New</Text>
				<Button
					mode="contained"
					style={styles.submitButton}
					onPress={() => null}>
					POST
				</Button>
			</View>
			<TextInput
				mode="flat"
				style={styles.captionInput}
				underlineColor="transparent"
				multiline={true}
				theme={{ colors: { primary: colors.blue } }}
				placeholder="Write caption here..."
				selectionColor={colors.blue}
			/>

			<View style={styles.imageSelectWrapper}>
				<View style={styles.imageTitleWrapper}>
					<Text style={styles.imageText}>Image</Text>
					<TouchableNativeFeedback>
						<View style={styles.imageSelectButton}>
							<MaterialCommunityIcons
								name="plus"
								size={30}
								color={colors.blue}
							/>
						</View>
					</TouchableNativeFeedback>
				</View>
				<Image
					source={require('../../assets/images/post.png')}
					style={styles.imageStyle}
				/>
			</View>
			<View style={{ height: spaces.sm }} />
		</ScrollView>
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
		marginVertical: spaces.sm,
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
	imageSelectWrapper: {},
	imageTitleWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: spaces.sm,
	},
	imageText: {
		fontSize: font.lg,
	},
	imageSelectButton: {
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageStyle: {
		width: '100%',
		height: width - spaces.sm - spaces.sm,
		borderRadius: 10,
	},
});
