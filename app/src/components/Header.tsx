import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

interface Props {
	clicked: () => void;
}

export const Header : React.FC<Props> = ({clicked}) => {

	return (
		<View style={styles.container}>
			<Pressable onPress={clicked}style={styles.profile}>
				<Text style={styles.txt}></Text>
			</Pressable>
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
