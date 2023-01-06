import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

export const Breathing : React.FC = () => {

	return (
		<View style={styles.container}>
			<SharedElement id='bt-title'>
				<Text style={styles.title}>Start</Text>
			</SharedElement>			
		</View>
	)
}

const styles = StyleSheet.create({
	
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'	
	},
	title: {
		fontFamily: 'cooper',
		color: 'black',
		fontSize: 30
	}
})
