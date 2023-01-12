import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

interface Props {
	clicked: () => void;
}

export const Header : React.FC<Props> = ({clicked}) => {

	return (
		<View style={styles.container}>
			<Pressable onPress={clicked}style={styles.profile}>
				<Text style={styles.txt}>
					<Ionicons name={'person-outline'} size={25} color='black' />
				</Text>
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
		backgroundColor: 'white',
		borderRadius: 22,
		justifyContent: 'center',
		alignItems: 'center'
	},
	txt: {
		fontFamily: 'cooper',
		color: 'white',
		fontSize: 20
	}
})
