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
	ScrollView,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import storiesData from '../../assets/data/storiesData';
import { spaces, colors } from '../../assets/values';
import StoryItem from './components/storyItem';
import Post from '../home/components/Post';
import postsData from '../../assets/data/postsData';
import { Divider } from 'react-native-paper';

const width = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {
	const renderStoriesItem = ({ item, index }) => {
		return <StoryItem item={item} index={index} />;
	};

	const renderPostItem = ({ item, index }) => {
		return <Post />;
	};

	return (
		<View style={styles.conatiner}>
			<ScrollView>
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
							<View>
								<Divider style={{ borderBottomWidth: 1 }} />
								<Post key={index} />
							</View>
						);
					})}
				</View>
			</ScrollView>
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
	postsWrapper: {},
});

export default HomeScreen;
