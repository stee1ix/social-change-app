import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
	KeyboardAvoidingView,
	Keyboard,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { colors, spaces } from '../../assets/values';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { useQuery } from 'react-query';
import { connect } from 'react-redux';
import { toggleAuthenticated } from '../../redux/user/user.actions';
import { signupUserFirebase } from '../../firebase/auth';

const width = Dimensions.get('window').width;

const RegisterScreen = ({ navigation, toggleAuthenticated }) => {
	const [passwordHidden, setPasswordHidden] = useState(true);
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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
						value={name}
						textContentType="name"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
						onChangeText={value => setName(value)}
					/>
					{/* Email Input */}
					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						value={email}
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
						value={username}
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
						value={password}
						textContentType="newPassword"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
						secureTextEntry={passwordHidden}
						autoCorrect={false}
						right={
							<TextInput.Icon
								size={20}
								name={passwordHidden ? 'eye-off' : 'eye'}
								onPress={() =>
									setPasswordHidden(!passwordHidden)
								}
							/>
						}
						onChangeText={value => setPassword(value)}
					/>

					<Button
						mode="contained"
						onPress={async () => {
							Keyboard.dismiss();
							try {
								await signupUserFirebase(
									name,
									username,
									email,
									password
								);
								toggleAuthenticated();
							} catch (error) {
								console.log(error);
							}
						}}
						uppercase={false}
						color={colors.blue}
						style={styles.loginButton}>
						Signup
					</Button>
					<View style={styles.horizontalRule} />
					{/* <Text style={styles.otherLoginOptionsText}>
						Or Signup Using
					</Text>
					<TouchableOpacity style={styles.googleLogo}>
						<AntDesign
							name="google"
							size={32}
							color={colors.white9}
						/>
					</TouchableOpacity> */}
					{/* <View style={styles.loginMessageWrapper}>
						<Text style={styles.loginMessage}>
							Already have an account?
						</Text>
						<TouchableOpacity
							onPress={() => navigation.navigate('LoginScreen')}>
							<Text style={styles.loginButton}>Login</Text>
						</TouchableOpacity>
					</View> */}
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleAuthenticated: () => dispatch(toggleAuthenticated()),
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
