import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native'

interface Props {
	txt: string
	selected?: boolean;
	clicked: () => void;
}

export const Item: React.FC<Props> = ({txt, selected, clicked}) => {

	return (
		<Pressable onPress={clicked} style={[styles.container, {opacity: selected ? 1 : .6}]}>
			<Text style={styles.txt}>{txt}</Text>
		</Pressable>		
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		borderWidth: 2,
		borderColor: '#ffffff',
		marginBottom: 20,
		borderRadius: 14
	},
	txt: {
		paddingTop: 5,
		color: 'white',
		fontFamily: 'AvBold',
		fontWeight: 'bold',
		fontSize: 18
	}
})
