import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';


export const Option : React.FC = () => {


	return (
		<Pressable style={styles.container}>
			<View style={styles.row}>
				<View style={styles.circle}>
					<Ionicons size={30} name={'arrow-forward-outline'} />
				</View>
				<Text style={styles.title}>Breathing</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		//
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	circle: {
		height: 100,
		width: 100,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'flex-end',
		backgroundColor: '#8FD1FF',
		position: 'absolute',
		left: -50,
		paddingRight: 15
	},
	title: {
		color: 'white',
		left: 70,
		fontSize: 30,
		fontFamily: 'cooper'
	}
})
