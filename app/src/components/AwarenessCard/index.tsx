import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SharedElement } from 'react-navigation-shared-element';
import { useFocusEffect } from '@react-navigation/native';
import { AwarnessItem } from '../../utils/data/awarness' 
import { Button } from '../General'

const { width } = Dimensions.get('window')

interface Props {
	clicked: () => void;
	navigation: any
	item: AwarnessItem
}

export const AwarenessCard : React.FC<Props> = ({navigation, item, clicked}) => {

	const [opacity, setOpacity] = React.useState(0)

	useFocusEffect(() => {
		if(navigation.isFocused())
			setOpacity(1)
	})

	return(
		<Pressable onPress={() => {setOpacity(0);clicked()}} style={[styles.container, {opacity}]}>
			<View>
				<SharedElement id={`${item.id}-gradient`}>
					<LinearGradient colors={[item.gradient[0], item.gradient[1]]} style={styles.card}>
					</LinearGradient>
				</SharedElement>
				<SharedElement id={`${item.id}-title`}>
					<Text style={styles.title}>{item.title}</Text>
				</SharedElement>
			</View>
			<Pressable onPress={() => { item.survey && navigation.navigate("Survey", { survey: item.survey })}} style={[styles.btn, {opacity: item.survey ? 1 : 0}]}>
				<Text style={styles.btnText}>Check</Text>
			</Pressable> 
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width - (width * .1),
		padding: 10,
		justifyContent: 'space-evenly',
		alignItems: 'center',
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
		marginTop: 20,
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 50,
		width: '80%'
	},
	btnText: {
		color: 'black',
		fontSize: 25,
		fontFamily: 'cooper',
		textAlign: 'center'
	}
})
