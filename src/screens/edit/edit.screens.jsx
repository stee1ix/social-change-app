import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, FAB } from 'react-native-paper';
import { colors, font, spaces } from '../../assets/values';
import { Avatar } from 'react-native-elements';
import { editUserProfile, getUserBio } from '../../firebase/userProfile.js';
import { auth } from '../../firebase/firebase.config';

const EditScreen = () => {
	const [name, setName] = useState('');
	const [bio, setBio] = useState('');

	useEffect(() => {
		async function fetch() {
			setName(auth.currentUser.displayName);
			const userBio = await getUserBio();
			setBio(userBio);
		}
		fetch();
		return () => null;
	}, []);

	return (
		<View style={styles.settingsWrapper}>
			<View style={styles.profileIconWrapper}>
				<View>
					<Avatar
						source={require('../../assets/images/propic.jpg')}
						size={70}
						rounded
						onPress={() => null}
					/>
					<Avatar
						containerStyle={styles.picEditIcon}
						icon={{ name: 'edit', size: 15 }}
						rounded
						size={25}
						overlayContainerStyle={{ backgroundColor: colors.blue }}
					/>
				</View>
				<Text style={styles.usernameText}>user123</Text>
			</View>
			<TextInput
				mode="outlined"
				label="Name"
				textContentType="name"
				style={styles.inputStyles}
				theme={{ colors: { primary: colors.blue } }}
				onChangeText={value => setName(value)}
				value={name}
			/>
			<TextInput
				mode="outlined"
				label="Bio"
				multiline={true}
				style={styles.inputStyles}
				theme={{ colors: { primary: colors.blue } }}
				onChangeText={value => setBio(value)}
				value={bio}
			/>

			<FAB
				icon="check"
				color="#fff"
				onPress={() => {
					editUserProfile(name, bio);
				}}
				style={styles.doneButton}
			/>
		</View>
	);
};

export default EditScreen;

const styles = StyleSheet.create({
	settingsWrapper: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: spaces.smd,
	},
	profileIconWrapper: {
		alignSelf: 'center',
		alignItems: 'center',
		marginBottom: spaces.sm,
		marginTop: spaces.lg,
	},
	picEditIcon: {
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
	usernameText: {
		marginTop: spaces.sm,
		fontSize: font.lg,
	},
	inputStyles: {
		backgroundColor: '#fff',
		marginBottom: spaces.md,
	},
	doneButton: {
		backgroundColor: colors.blue,
		position: 'absolute',
		right: spaces.md,
		bottom: spaces.lg,
	},
});
