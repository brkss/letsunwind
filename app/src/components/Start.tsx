import React from 'react';
import { Pressable, Text, Dimensions, StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

interface Props {
	onPress: () => void;
}

const { width } = Dimensions.get('window')

export const StartButton : React.FC<Props> = ({onPress}) => {

	return (
		<Pressable onPress={onPress} style={styles.container}>
			<SharedElement id='bt-title' >
				<Text style={styles.txt}>Start</Text>
			</SharedElement>
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
