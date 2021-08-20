import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Button, Divider } from 'react-native-paper';
import { colors, font, spaces } from '../../assets/values';

const width = Dimensions.get('window').width;
const IMAGES_PER_ROW = 2;

const imageSize = width / IMAGES_PER_ROW - (spaces.sm + spaces.ssm);

const images = [
	{ id: 1, uri: `https://picsum.photos/id/${193}/${imageSize}` },
	{ id: 2, uri: `https://picsum.photos/id/${2}/${imageSize}` },
	{ id: 3, uri: `https://picsum.photos/id/${880}/${imageSize}` },
	{ id: 4, uri: `https://picsum.photos/id/${43}/${imageSize}` },
	{ id: 5, uri: `https://picsum.photos/id/${99}/${imageSize}` },
	{ id: 6, uri: `https://picsum.photos/id/${62}/${imageSize}` },
	{ id: 7, uri: `https://picsum.photos/id/${70}/${imageSize}` },
	{ id: 8, uri: `https://picsum.photos/id/${8}/${imageSize}` },
	{ id: 9, uri: `https://picsum.photos/id/${9}/${imageSize}` },
	{ id: 10, uri: `https://picsum.photos/id/${10}/${imageSize}` },
];

const ProfileScreen = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<View style={styles.userInfoSectionWrapper}>
					<View style={styles.followContainer}>
						<View style={styles.followWrapper}>
							<Text style={styles.followTitle}>Followers</Text>
							<Text style={styles.followCount}>121</Text>
						</View>
						<View style={styles.nameImageWrapper}>
							<Avatar
								source={require('../../assets/images/propic.jpg')}
								size={70}
								rounded
							/>
							<View style={styles.nameWrapper}>
								<Text style={styles.nameText}>
									Cristiano Ronaldo
								</Text>
								<Text style={styles.usernameText}>
									cr7official
								</Text>
							</View>
						</View>
						<View style={styles.followWrapper}>
							<Text style={styles.followTitle}>Following</Text>
							<Text style={styles.followCount}>12</Text>
						</View>
					</View>
					<Text style={styles.bioText}>
						I'm the best footballer in the world😎 I'm the best
						footballer in the world🐋 I'm the best footballer in the
						world👽
					</Text>
					<Button
						mode="contained"
						style={styles.followButton}
						onPress={() => null}>
						FOLLOW
					</Button>
				</View>
				<Divider style={{ marginBottom: spaces.sm }} />
				<View style={styles.postsContainer}>
					{images.map((item, index) => {
						return (
							<TouchableOpacity
								key={index}
								style={styles.imageWrapper}>
								<Image
									source={{
										uri: item.uri,
									}}
									style={styles.image}
								/>
							</TouchableOpacity>
						);
					})}
				</View>
				<View style={{ height: 80 }} />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: spaces.sm,
	},
	userInfoSectionWrapper: {
		marginTop: spaces.md,
	},
	nameImageWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: spaces.ssm,
	},
	nameWrapper: {
		marginLeft: spaces.smd,
		marginTop: spaces.sm,
		alignItems: 'center',
	},
	nameText: {
		fontWeight: 'bold',
		fontSize: font.xl,
	},
	usernameText: {},
	followContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginBottom: spaces.sm,
	},
	followWrapper: {
		alignItems: 'center',
	},
	followTitle: {
		color: 'grey',
	},
	followCount: {
		fontWeight: 'bold',
		fontSize: font.xl,
	},
	bioText: {
		marginHorizontal: spaces.ssm,
	},
	followButton: {
		backgroundColor: colors.blue,
		marginVertical: spaces.md,
		justifyContent: 'center',
	},
	postsContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginHorizontal: -spaces.ssm,
	},
	imageWrapper: {
		margin: spaces.ssm,
	},
	image: {
		width: imageSize,
		height: imageSize,
		borderRadius: 10,
	},
});

export default ProfileScreen;
