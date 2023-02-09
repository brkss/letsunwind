import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
	name: string;
	duration: string;
}

export const SessionElement : React.FC<Props> = ({name, duration}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{name}</Text>
			<Text style={styles.time}>{duration} min</Text>
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
