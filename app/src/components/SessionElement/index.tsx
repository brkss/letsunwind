import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SessionElement : React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Reflection</Text>
			<Text style={styles.time}>2 min</Text>
		</View>		
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: '#000000',
		borderRadius: 14,
		marginTop: 20
	},
	title: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 30
	},
	time: {
		marginTop: 10,
		fontFamily: 'AvReg',
		color: 'white',
		fontSize: 19 
	}
})
