import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { colors, spaces } from '../../assets/values';
import { connect } from 'react-redux';
import { toggleAuthenticated } from '../../redux/user/user.actions';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

const width = Dimensions.get('window').width;

async function saveToken(key, value) {
	await SecureStore.setItemAsync(key, value);
	console.log('saved', value, 'into storage');
}

const LoginScreen = ({ navigation, toggleAuthenticated }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [passwordHidden, setPasswordHidden] = useState(true);

	function loginUserRequest() {
		return axios.post('http://192.168.43.135:5000/api/user/login', {
			username,
			password,
		});
	}

	async function loginUser() {
		try {
			const loginResponse = await loginUserRequest();
			console.log(loginResponse);

			// saving the authenticated user data to storage
			const authToken = loginResponse.headers['auth-token'];
			const username = loginResponse.data;
			saveToken('user', JSON.stringify({ authToken, username }));

			await toggleAuthenticated({
				username,
				authToken,
				authenticated: true,
			});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<ImageBackground
			source={require('../../assets/images/background2.png')}
			style={styles.backgroundImage}>
			<KeyboardAvoidingView behavior="height" enabled={true}>
				<View style={styles.loginWrapper}>
					<View style={styles.logoWrapper}>
						<Image
							source={require('../../assets/logo.png')}
							style={styles.logoImage}
						/>
						<Text style={styles.logoText}>SOCIAL CHANGE</Text>
					</View>
					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						placeholder="Username"
						textContentType="username"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
						onChangeText={value => setUsername(value)}
					/>
					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						placeholder="Password"
						textContentType="password"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
						secureTextEntry={passwordHidden}
						autoCorrect={false}
						onChangeText={value => setPassword(value)}
						right={
							<TextInput.Icon
								size={20}
								name="eye"
								onPress={() =>
									setPasswordHidden(!passwordHidden)
								}
							/>
						}
					/>
					<Button
						mode="contained"
						onPress={() => loginUser()}
						uppercase={false}
						color={colors.blue}
						style={styles.loginButton}>
						Login
					</Button>
					<View style={styles.horizontalRule} />
					<Text style={styles.otherLoginOptionsText}>
						Or Login Using
					</Text>
					<TouchableOpacity style={styles.googleLogo}>
						<AntDesign
							name="google"
							size={32}
							color={colors.white9}
						/>
					</TouchableOpacity>
					<View style={styles.registerMessageWrapper}>
						<Text style={styles.registerMessage}>
							Don't have an account?
						</Text>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('RegisterScreen')
							}>
							<Text style={styles.registerButton}>Regsiter</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleAuthenticated: userAuthObject =>
		dispatch(toggleAuthenticated(userAuthObject)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginWrapper: {
		// backgroundColor: 'rgba(255,255,255,0.35)',
		width: width - 30,
		height: 550,
		borderRadius: spaces.sm,
		paddingHorizontal: spaces.md,
	},
	logoWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoImage: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginVertical: 50,
		marginRight: spaces.sm,
	},
	logoText: {
		color: '#fff',
		fontSize: 24,
	},
	loginButton: {
		borderRadius: 5,
	},
	inputWrapper: {
		backgroundColor: colors.white9,
		borderRadius: 5,
		marginBottom: spaces.md,
		height: 50,
		borderBottomWidth: 0,
	},
	horizontalRule: {
		borderBottomWidth: 1,
		borderBottomColor: colors.white35,
		marginVertical: spaces.md,
	},
	otherLoginOptionsText: {
		alignSelf: 'center',
		color: colors.white7,
	},
	googleLogo: {
		alignSelf: 'center',
		marginVertical: spaces.md,
		width: 32,
	},
	registerMessageWrapper: {
		flexDirection: 'row',
		alignSelf: 'center',
	},
	registerMessage: {
		color: colors.white7,
		marginRight: 5,
	},
	registerButton: {
		fontWeight: 'bold',
		color: colors.white9,
	},
});
