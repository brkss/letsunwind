import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
	error: string;
}

export const Error : React.FC<Props> = ({error}) => {

	return (
		<View style={styles.container}>
			<Text style={styles.txt}>{error}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingHorizontal: 0,
		//backgroundColor: '#ffbaba',
		paddingTop: 23,
		marginBottom: 20,
		borderRadius: 10,
	},
	txt: {
		color: '#ffbaba',
		fontSize: 18,
		fontWeight: 'bold',
		fontFamily: 'AvBold',
		textAlign: 'center',
	}
})
