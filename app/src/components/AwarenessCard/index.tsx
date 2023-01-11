import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SharedElement } from 'react-navigation-shared-element';
import { useFocusEffect } from '@react-navigation/native';

const { width } = Dimensions.get('window')

interface Props {
	title: string;
	gradient: string[]
	clicked: () => void;
	id: string
	navigation: any
}

export const AwarenessCard : React.FC<Props> = ({navigation, id, title, gradient, clicked}) => {

	const [opacity, setOpacity] = React.useState(0)

	useFocusEffect(() => {
		if(navigation.isFocused())
			setOpacity(1)
	})

	return(
		<View style={[styles.container, {opacity}]}>
			<View>
				<SharedElement id={`${id}-gradient`}>
					<LinearGradient colors={[gradient[0], gradient[1]]} style={styles.card}>
					</LinearGradient>
				</SharedElement>
				<SharedElement id={`${id}-title`}>
					<Text style={styles.title}>{title}</Text>
				</SharedElement>
			</View>
			<View>
				<Pressable onPress={() => {setOpacity(0);clicked()}} style={styles.btn}>
					<Text style={styles.btnText}>Learn More</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width - (width * .1),
		padding: 10,
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	card: {
		width: width * .8,
		height: width * .8,
		borderRadius: 35
	},
	title: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 30,
		marginTop: 20,
		//textAlign: 'center'
	},
	btn: {
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 100,
		width: width * .5,
	},
	btnText: {
		fontFamily: 'cooper',
		fontSize: 20,
		color: 'black',
		textAlign: 'center',
	}
})
