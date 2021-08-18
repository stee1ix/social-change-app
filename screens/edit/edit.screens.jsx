import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, FAB } from 'react-native-paper';
import { colors, font, spaces } from '../../assets/values';
import { Avatar } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditScreen = () => {
	const [date, setDate] = useState(new Date());
	const [showDatePicker, setShowDatePicker] = useState(false);

	const onChange = (event, selectedDate) => {
		const currDate = selectedDate || date;
		setShowDatePicker(false);
		setDate(currDate);
	};

	return (
		<View style={styles.settingsWrapper}>
			<View style={styles.profileIconWrapper}>
				<View>
					<Avatar
						source={require('../../assets/images/propic.jpg')}
						size={80}
						rounded
						onPress={() => null}
					/>
					<Avatar
						containerStyle={styles.picEditIcon}
						icon={{ name: 'edit', size: 15 }}
						rounded
						size={25}
						overlayContainerStyle={{ backgroundColor: colors.blue }}
					/>
				</View>
				<Text style={styles.usernameText}>user123</Text>
			</View>
			<TextInput
				mode="outlined"
				label="Name"
				defaultValue="User Kumar"
				textContentType="name"
				style={styles.inputStyles}
				theme={{ colors: { primary: colors.blue } }}
			/>
			<TextInput
				mode="outlined"
				label="Bio"
				defaultValue="helloo my name ishelloo my name ishelloo my name is"
				multiline={true}
				style={styles.inputStyles}
				theme={{ colors: { primary: colors.blue } }}
			/>
			<TextInput
				mode="outlined"
				label="Date of Birth"
				value={date.toLocaleDateString()}
				editable={false}
				style={styles.inputStyles}
				right={
					<TextInput.Icon
						name="calendar-check"
						color={colors.blue}
						onPress={() => setShowDatePicker(true)}
					/>
				}
				theme={{ colors: { primary: colors.blue } }}
			/>

			{showDatePicker && (
				<DateTimePicker
					mode="date"
					dateFormat="day month year"
					display="calendar"
					value={date}
					onChange={onChange}
				/>
			)}

			<FAB
				icon="check"
				color="#fff"
				onPress={() => null}
				style={styles.doneButton}
			/>
		</View>
	);
};

export default EditScreen;

const styles = StyleSheet.create({
	settingsWrapper: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: spaces.smd,
	},
	profileIconWrapper: {
		alignSelf: 'center',
		alignItems: 'center',
		marginBottom: spaces.sm,
		marginTop: spaces.lg,
	},
	picEditIcon: {
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
	usernameText: {
		marginTop: spaces.sm,
		fontSize: font.lg,
	},
	inputStyles: {
		backgroundColor: '#fff',
		marginBottom: spaces.md,
	},
	doneButton: {
		backgroundColor: colors.blue,
		position: 'absolute',
		right: spaces.md,
		bottom: spaces.lg,
	},
});
