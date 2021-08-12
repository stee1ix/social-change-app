import React from 'react';
import {
	StyleSheet,
	Text,
	Image,
	View,
	ImageBackground,
	Dimensions,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import storiesData from '../../assets/data/storiesData';
import { spaces, colors } from '../../assets/values';
import StoryItem from './components/storyItem';

const width = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
	const renderStoriesItem = ({ item, index }) => {
		return <StoryItem item={item} index={index} />;
	};

	return (
		<View style={styles.conatiner}>
			<View style={styles.storiesWrapper}>
				<FlatList
					data={storiesData}
					renderItem={renderStoriesItem}
					keyExtractor={item => item.username}
					horizontal
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	conatiner: {
		flex: 1,
	},
	storiesWrapper: {
		marginVertical: spaces.sm,
	},
});

export default HomeScreen;
