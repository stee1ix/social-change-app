import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-elements';
import { spaces } from '../../assets/values';

const StoryView = ({ navigation }) => {
	const counter = useRef(0);

	useEffect(() => {
		navigation
			.getParent()
			.getParent()
			.setOptions({
				headerShown: false,
				tabBarStyle: { display: 'none' },
			});

		navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });

		const timeout = setTimeout(() => {
			navigation.goBack();
		}, 3000);

		return () => {
			navigation
				.getParent()
				.getParent()
				.setOptions({ headerShown: true });

			navigation.getParent().setOptions({ tabBarStyle: { height: 60 } });

			clearTimeout(timeout);
		};
	}, []);

	return (
		<ImageBackground
			source={require('../../assets/images/background.jpeg')}
			style={styles.imageStyle}>
			<SafeAreaView>
				<View style={styles.topBarWrapper}>
					<Avatar
						source={require('../../assets/images/storyIcon.png')}
						rounded
					/>
					<Text style={styles.username}>user_123</Text>
				</View>
			</SafeAreaView>
		</ImageBackground>
	);
};

export default StoryView;

const styles = StyleSheet.create({
	imageStyle: {
		flex: 1,
		backgroundColor: '#fff',
	},
	topBarWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: spaces.sm,
	},
	username: {
		marginLeft: spaces.sm,
	},
});
