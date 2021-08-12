import React from 'react';
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

const width = Dimensions.get('window').width;

const RegisterScreen = ({ navigation }) => {
	return (
		<ImageBackground
			source={require('../../assets/images/background2.png')}
			style={styles.backgroundImage}>
			<KeyboardAvoidingView behavior="height" enabled={true}>
				<View style={styles.loginWrapper}>
					<TextInput
						style={[styles.inputWrapper, { marginTop: 20 }]}
						mode="flat"
						placeholder="Name"
						textContentType="name"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
					/>

					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						placeholder="Email"
						textContentType="emailAddress"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
					/>
					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						placeholder="Username"
						textContentType="username"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
					/>
					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						placeholder="Password"
						textContentType="newPassword"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
						secureTextEntry={true}
						right={<TextInput.Icon size={20} name="eye" />}
					/>
					<Button
						mode="contained"
						onPress={() => console.log('Signed Up')}
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
		backgroundColor: colors.white35,
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

export default RegisterScreen;
