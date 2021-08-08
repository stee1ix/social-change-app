import React from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const HomeScreen = () => {
	return (
		<ImageBackground
			source={require('../../assets/background.jpeg')}
			style={styles.backgroundImage}>
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
					underlineColor="transparent"
					theme={{ colors: { primary: 'transparent' } }}
				/>
				<TextInput
					style={styles.inputWrapper}
					mode="flat"
					placeholder="Password"
					underlineColor="transparent"
					theme={{ colors: { primary: 'transparent' } }}
					secureTextEntry={true}
					right={<TextInput.Icon size={20} name="eye" />}
				/>
				<Button
					mode="contained"
					onPress={() => console.log('hello')}
					uppercase={false}
					color="#027aff"
					style={styles.loginButton}>
					Login
				</Button>
				<View style={styles.horizontalRule} />
				<Text style={styles.otherLoginOptionsText}>Or Login Using</Text>
				<TouchableOpacity>
					<AntDesign
						name="google"
						style={styles.googleLogo}
						size={32}
						color="rgba(255,255,255,0.9)"
					/>
				</TouchableOpacity>
				<View style={styles.registerMessageWrapper}>
					<Text style={styles.registerMessage}>
						Don't have an account?
					</Text>
					<TouchableOpacity>
						<Text style={styles.registerButton}>Regsiter</Text>
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
		height: 550,
		borderRadius: 10,
		paddingHorizontal: 20,
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
		marginRight: 10,
	},
	logoText: {
		color: '#fff',
		fontSize: 24,
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
	},
	registerMessageWrapper: {
		flexDirection: 'row',
		alignSelf: 'center',
	},
	registerMessage: {
		color: 'rgba(255,255,255,0.7)',
		marginRight: 5,
	},
	registerButton: {
		fontWeight: 'bold',
		// fontSize: 16,
		color: 'rgba(255,255,255,0.9)',
	},
});

export default HomeScreen;
