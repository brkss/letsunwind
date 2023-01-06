import React from 'react';
import { Pressable, Text, Dimensions, StyleSheet } from 'react-native';

interface Props {
	onPress: () => void;
}

const { width } = Dimensions.get('window')

export const StartButton : React.FC<Props> = ({onPress}) => {

	return (
		<Pressable onPress={onPress} style={styles.container}>
			<Text style={styles.txt}>Start</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	 container: {
		height: width,
		width,
		backgroundColor: '#FFFFFF',
		alignItems: 'center',
		paddingTop: 50,
		//justifyContent: 'center',
		borderRadius: width,
		position: 'absolute',
		bottom: - width /2 - 100
	},
	txt: {
		color: 'black',
		fontFamily: 'cooper',
		fontSize: 30
	}
})
