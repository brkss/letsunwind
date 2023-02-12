import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SharedElement } from 'react-navigation-shared-element';
import { useFocusEffect } from '@react-navigation/native';
import { AwarnessItem } from '../../utils/data/awarness' 
import { Button } from '../General'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

const { width } = Dimensions.get('window')

interface Props {
	clicked: () => void;
	navigation: any
	title: string;
	current: boolean;
	gradient: string[]
	survey?: string
	id: string;
}

const CARD_HEIGHT = width - (width * .1)

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const AwarenessCard : React.FC<Props> = ({navigation, title, clicked, current, gradient, survey, id }) => {

	const [showed, setShowed] = React.useState<boolean>(false);
	const [opacity, setOpacity] = React.useState(0)
	const bottom = useSharedValue<number>(-CARD_HEIGHT)

	React.useEffect(() => {
		if(current && survey){
			setShowed(true);
			bottom.value = withDelay(100, withTiming(-CARD_HEIGHT/1.5, {duration: 300}))	
		}else if (survey){
			setShowed(false);
			bottom.value = withDelay(100, withTiming(-CARD_HEIGHT, {duration: 500}))	
		}
	}, [current])

	const style = useAnimatedStyle(() => {
		return {
			bottom: bottom.value,
			/*
			transform: [
				{ translateY: translate.value }
			]
			*/
		}
	})

	useFocusEffect(() => {
		if(navigation.isFocused())
			setOpacity(1)
	})

	return(
		<Pressable onPress={() => {setOpacity(0);clicked()}} style={[styles.container, {opacity}]}>
			<View>
				<SharedElement id={`${id}-gradient`}>
					<LinearGradient colors={[gradient[0], gradient[1]]} style={styles.card}>
					</LinearGradient>
				</SharedElement>
				<SharedElement id={`${id}-title`}>
					<Text style={styles.title}>{title}  </Text>
				</SharedElement>
			</View>
			<AnimatedPressable onPress={() => { survey && navigation.navigate("Survey", { survey: survey })}} style={[styles.btn, style, {opacity: survey ? 1 : 0}]}>
				<Text style={styles.btnText}>Survey</Text>
			</AnimatedPressable> 
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
		backgroundColor: '#ffcfd2',
		padding: 50,
		//borderRadius: 50,
		width: width - (width * .1),
		height: width - (width * .1),
		borderRadius: width - (width * .1),
		//bottom: -(width - (width * .1))/1.5,
		position: 'absolute'
		//width: '80%'
	},
	btnText: {
		color: 'black',
		fontSize: 25,
		fontFamily: 'cooper',
		textAlign: 'center'
	}
})
