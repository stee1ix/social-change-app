import React from 'react';
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

const width = Dimensions.get('window').width;

const LoginScreen = ({ navigation }) => {
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
					/>
					<TextInput
						style={styles.inputWrapper}
						mode="flat"
						placeholder="Password"
						textContentType="password"
						underlineColor="transparent"
						theme={{ colors: { primary: 'transparent' } }}
						secureTextEntry={true}
						right={<TextInput.Icon size={20} name="eye" />}
					/>
					<Button
						mode="contained"
						onPress={() => navigation.navigate('HomeDrawer')}
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

export default LoginScreen;
