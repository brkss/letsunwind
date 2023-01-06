import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable, Dimensions } from 'react-native';
import { Tips } from '../../components';
import Ionicons from '@expo/vector-icons/Ionicons'
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from 'react-native-reanimated'
import { BreathingIndicator } from '../../components'

//const { width } = Dimensions.get('window')
const tips = [
	{
		txt: "Strengthen your focus by noticing the cool breath as you inhale and the warmth as you exhale. "
	},
	{
		txt: "Strengthen your focus by noticing the cool breath as you inhale and the warmth as you exhale. "
	}
]

export const Breathing : React.FC = () => {
	
	const opa = useSharedValue<number>(1);
	const indOpa = useSharedValue<number>(0);
	const isBreathing = useSharedValue<boolean>(false);

	const handleGo = () => {
		opa.value = withTiming(0, {duration: 500})
		indOpa.value = withDelay(500, withTiming(1, {duration: 500}))
		setTimeout(() => {
			isBreathing.value = true	
		}, 500)
	}
	const indecatorStyle = useAnimatedStyle(() => {
		return {
			opacity: indOpa.value,
			display: isBreathing.value ? 'flex' : 'none' 
		}
	})
	const contentStyle = useAnimatedStyle(() => {
		return {
			opacity: opa.value,
			display: isBreathing.value ? 'none' : 'flex'
		}
	})

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Ionicons name={'arrow-down-outline'} size={40} color={'black'} />
				</View>
				<Animated.View style={[{flex: 1}, contentStyle]}>
					<Tips tips={tips} />	
					
				</Animated.View>
				<Animated.View style={[{flex:1}, indecatorStyle]}>
					<BreathingIndicator />				
				</Animated.View>
				<Pressable onPress={handleGo} style={styles.row}>
					<Text style={styles.btnTxt}>Go</Text>
					<Ionicons name={'arrow-forward-outline'} size={40} color={'black'} />
				</Pressable>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'	
	},
	title: {
		fontFamily: 'cooper',
		//color: 'black',
		fontSize: 30
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		//flex: 1
	},
	btnTxt: {
		fontSize: 30,
		fontFamily: 'cooper',
		marginRight: 20
	}
})
