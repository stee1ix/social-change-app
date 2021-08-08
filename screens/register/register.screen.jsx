import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const RegisterScreen = ({ navigation }) => {
	return (
		<ImageBackground
			source={require('../../assets/background.jpeg')}
			style={styles.backgroundImage}>
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
					color="#027aff"
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
						color="rgba(255,255,255,0.9)"
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
		backgroundColor: 'rgba(255,255,255,0.35)',
		width: width - 30,
		height: 520,
		borderRadius: 10,
		paddingHorizontal: 20,
	},
	loginButton: {
		borderRadius: 5,
	},
	inputWrapper: {
		backgroundColor: 'rgba(255,255,255,0.35)',
		borderRadius: 5,
		marginBottom: 20,
		height: 50,
		borderBottomWidth: 0,
	},
	horizontalRule: {
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(255,255,255,0.35)',
		marginVertical: 20,
	},
	otherLoginOptionsText: {
		alignSelf: 'center',
		color: 'rgba(255,255,255,0.7)',
	},
	googleLogo: {
		alignSelf: 'center',
		marginVertical: 20,
		width: 32,
	},
	loginMessageWrapper: {
		flexDirection: 'row',
		alignSelf: 'center',
	},
	loginMessage: {
		color: 'rgba(255,255,255,0.7)',
		marginRight: 5,
	},
	loginButton: {
		fontWeight: 'bold',
		color: 'rgba(255,255,255,0.9)',
	},
});

export default RegisterScreen;
