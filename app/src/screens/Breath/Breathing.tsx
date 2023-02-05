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

export const Breathing : React.FC<any> = ({route, navigation}) => {
	
	const { minutes } = route.params
	const opa = useSharedValue<number>(1);
	const indOpa = useSharedValue<number>(0);
	const isBreathing = useSharedValue<boolean>(false);
	const [time, setTime] = React.useState<number>(new Date().getTime() + (24 * 60 * 60 * 1000))

	const handleTime = () => {
		const NW_IN_MS = new Date().getTime()
		const target = minutes * 60 * 1000 // 2 minutes  
		setTime(target + NW_IN_MS)
	}
	const handleGo = () => {
		opa.value = withTiming(0, {duration: 500})
		indOpa.value = withDelay(500, withTiming(1, {duration: 500}))
		setTimeout(() => {
			isBreathing.value = true	
			handleTime()
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

	const finish = () => {
		const _data = {
			time: minutes,
			type: "breathing"
		}
		console.log("data : ", _data);
		navigation.popToTop()
	}

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={{justifyContent: 'center', alignItems: 'center'}}>
					<Ionicons name={'arrow-down-outline'} size={40} color={'black'} />
				</View>
				<Animated.View style={[{flex: 1}, contentStyle]}>
					<Tips tips={tips} />	
					<Pressable onPress={handleGo} style={styles.row}>
						<Text style={styles.btnTxt}>Go {minutes}min </Text>
					<Ionicons name={'arrow-forward-outline'} size={40} color={'black'} />
				</Pressable>
				</Animated.View>
				<Animated.View style={[{flex:1}, indecatorStyle]}>
					<BreathingIndicator finish={finish} time={time} />				
				</Animated.View>
				
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
