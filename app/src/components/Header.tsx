import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header : React.FC = () => {

	return (
		<View style={styles.container}>
			<View style={styles.profile}>
				<Text style={styles.txt}></Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		padding: 10,
	},
	profile: {
		height: 50,
		width: 50,
		backgroundColor: '#151FFF',
		borderRadius: 17,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txt: {
		fontFamily: 'cooper',
		color: 'white',
		fontSize: 27
	}
})
