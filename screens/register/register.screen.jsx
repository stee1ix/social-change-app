import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
	KeyboardAvoidingView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { colors, spaces } from '../../assets/values';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { useQuery } from 'react-query';
import * as SecureStore from 'expo-secure-store';
import { connect } from 'react-redux';
import { toggleAuthenticated } from '../../redux/user/user.actions';

const width = Dimensions.get('window').width;

async function saveToken(key, value) {
	await SecureStore.setItemAsync(key, value);
	console.log('saved', value, 'into storage');
}

const RegisterScreen = ({ navigation, toggleAuthenticated }) => {
	const [date, setDate] = useState(new Date());
	const [showDatePicker, setShowDatePicker] = useState(false);

	const onDateChange = (event, selectedDate) => {
		const currDate = selectedDate || date;
		setShowDatePicker(false);
		setDate(currDate);
	};

	const [passwordHidden, setPasswordHidden] = useState(true);
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function registerUserRequest() {
		return axios.post('http://192.168.43.135:5000/api/user/register', {
			name,
			username,
			email,
			password,
			birth_date: date.toISOString().slice(0, 10),
		});
	}

	function loginUserRequest() {
		return axios.post('http://192.168.43.135:5000/api/user/login', {
			username,
			password,
		});
	}

	async function registerThenLogin() {
		try {
			const registerResponse = await registerUserRequest();
			// console.log(registerResponse);
			if (registerResponse.status !== 200) {
				throw '400 bad request';
			}
			const loginResponse = await loginUserRequest();
			// console.log(loginResponse);
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
					{/* Name Input */}
					<TextInput
						style={[styles.inputWrapper, { marginTop: 20 }]}
						mode="flat"
						placeholder="Name"
						textContentType="name"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
						onChangeText={value => setName(value)}
					/>
					{/* Email Input */}
					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						placeholder="Email"
						textContentType="emailAddress"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
						onChangeText={value => setEmail(value)}
					/>
					{/* Username Input */}
					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						placeholder="Username"
						textContentType="username"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
						onChangeText={value => setUsername(value)}
					/>
					{/* Password Input */}
					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						placeholder="Password"
						textContentType="newPassword"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
						secureTextEntry={passwordHidden}
						autoCorrect={false}
						right={
							<TextInput.Icon
								size={20}
								name="eye"
								onPress={() =>
									setPasswordHidden(!passwordHidden)
								}
							/>
						}
						onChangeText={value => setPassword(value)}
					/>
					{/* Date of Birth selection */}
					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						placeholder="Date of Birth"
						underlineColor="transparent"
						editable={false}
						value={date.toISOString().slice(0, 10)}
						theme={{ colors: { primary: 'transparent' } }}
						right={
							<TextInput.Icon
								size={20}
								name="calendar"
								onPress={() => setShowDatePicker(true)}
							/>
						}
					/>
					{showDatePicker && (
						<DateTimePicker
							mode="date"
							dateFormat="day month year"
							display="calendar"
							value={date}
							onChange={onDateChange}
						/>
					)}
					<Button
						mode="contained"
						onPress={() => registerThenLogin()}
						uppercase={false}
						color={colors.blue}
						style={styles.loginButton}>
						Signup
					</Button>
					<View style={styles.horizontalRule} />
					<Text style={styles.otherLoginOptionsText}>
						Or Signup Using
					</Text>
					<TouchableOpacity style={styles.googleLogo}>
						<AntDesign
							name="google"
							size={32}
							color={colors.white9}
						/>
					</TouchableOpacity>
					<View style={styles.loginMessageWrapper}>
						<Text style={styles.loginMessage}>
							Already have an account?
						</Text>
						<TouchableOpacity
							onPress={() => navigation.navigate('LoginScreen')}>
							<Text style={styles.loginButton}>Login</Text>
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

export default connect(null, mapDispatchToProps)(RegisterScreen);

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginWrapper: {
		// backgroundColor: 'rgba(255,255,255,0.35)',
		width: width - 30,
		height: 520,
		borderRadius: spaces.sm,
		paddingHorizontal: spaces.md,
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
	loginMessageWrapper: {
		flexDirection: 'row',
		alignSelf: 'center',
	},
	loginMessage: {
		color: colors.white7,
		marginRight: 5,
	},
	loginButton: {
		fontWeight: 'bold',
		color: colors.white9,
	},
});
