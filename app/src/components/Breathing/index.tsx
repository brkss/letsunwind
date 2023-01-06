import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export const BreathingIndicator : React.FC = () => {


	return (
		<View style={styles.container}>
			<View style={styles.circle} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	circle:{
		height: width * .8,
		width: width * .8,
		borderRadius: width * .8,
		backgroundColor: 'black'
	}
})
