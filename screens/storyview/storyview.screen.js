import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-elements';
import { ProgressBar } from 'react-native-paper';
import { colors, spaces } from '../../assets/values';

const StoryView = ({ navigation }) => {
	const [count, setCount] = useState(0);

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
		}, 3400);

		return () => {
			navigation
				.getParent()
				.getParent()
				.setOptions({ headerShown: true });

			navigation
				.getParent()
				.setOptions({ tabBarStyle: { display: 'flex' } });

			clearTimeout(timeout);
		};
	}, []);

	useEffect(() => {
		const counter = setInterval(() => {
			setCount(count + 0.03);
		}, 10);

		return () => {
			clearInterval(counter);
		};
	}, [count]);

	return (
		<ImageBackground
			// source={require('../../assets/images/background.jpeg')}
			source={{ uri: `https://picsum.photos/id/11/300` }}
			style={styles.imageStyle}>
			<SafeAreaView>
				<ProgressBar progress={count} color={colors.blue} />
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
