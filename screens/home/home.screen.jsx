import React from 'react';
import {
	StyleSheet,
	View,
	Dimensions,
	FlatList,
	ScrollView,
} from 'react-native';
import storiesData from '../../assets/data/storiesData';
import { spaces, colors } from '../../assets/values';
import StoryItem from './components/storyItem';
import Post from '../home/components/Post';
import postsData from '../../assets/data/postsData';
import { Divider } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
	const renderStoriesItem = ({ item, index }) => {
		return <StoryItem item={item} index={index} />;
	};

	return (
		<View style={styles.conatiner}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.storiesWrapper}>
					<FlatList
						data={storiesData}
						renderItem={renderStoriesItem}
						keyExtractor={item => item.username}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
				</View>
				<View style={styles.postsWrapper}>
					{postsData.map((item, index) => {
						return (
							<View key={index}>
								<Divider style={{ borderBottomWidth: 0 }} />
								<Post />
							</View>
						);
					})}
					<View style={{ height: 50 }}></View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	conatiner: {
		backgroundColor: '#fff',
		flex: 1,
	},
	storiesWrapper: {
		marginVertical: spaces.sm,
	},
	postsWrapper: {},
});

export default HomeScreen;
