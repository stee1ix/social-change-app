import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { colors, font, spaces } from '../../assets/values';

const ProfileScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.userInfoSectionWrapper}>
				<View style={styles.nameImageWrapper}>
					<Avatar
						source={require('../../assets/images/propic.jpg')}
						size={70}
						rounded
					/>
					<View style={styles.nameWrapper}>
						<Text style={styles.nameText}>Cristiano Ronaldo</Text>
						<Text style={styles.usernameText}>cr7official</Text>
					</View>
				</View>
				<View style={styles.followContainer}>
					<View style={styles.followWrapper}>
						<Text style={styles.followTitle}>Posts</Text>
						<Text style={styles.followCount}>11</Text>
					</View>
					<View style={styles.followWrapper}>
						<Text style={styles.followTitle}>Followers</Text>
						<Text style={styles.followCount}>121</Text>
					</View>
					<View style={styles.followWrapper}>
						<Text style={styles.followTitle}>Following</Text>
						<Text style={styles.followCount}>12</Text>
					</View>
				</View>
				<Text style={styles.bioText}>
					I'm the best footballer in the world I'm the best footballer
					in the world I'm the best footballer in the world
				</Text>
				<Button
					mode="contained"
					style={styles.followButton}
					onPress={() => null}>
					FOLLOW
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: spaces.sm,
	},
	userInfoSectionWrapper: {
		marginTop: spaces.sm,
	},
	nameImageWrapper: {
		flexDirection: 'row',
		marginBottom: spaces.sm,
	},
	nameWrapper: {
		marginLeft: spaces.md,
		flex: 1,
		justifyContent: 'center',
	},
	nameText: {
		fontWeight: 'bold',
		fontSize: font.lg,
	},
	usernameText: {},
	followContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: spaces.sm,
		marginHorizontal: spaces.md,
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
		// height: 40,
		// flex: 1,
		justifyContent: 'center',
	},
});

export default ProfileScreen;
