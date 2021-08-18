import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Surface, TextInput } from 'react-native-paper';
import { spaces } from '../../assets/values';
import { Entypo } from '@expo/vector-icons';

const SettingsScreen = () => {
	return (
		<View style={styles.settingsWrapper}>
			<Surface style={styles.optionWrapper}></Surface>
		</View>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({});
