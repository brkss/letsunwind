import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from 'react-native-reanimated';
import { useCountDown } from '../../utils/hooks/countDown'

const { width } = Dimensions.get('window')

const NOW_IN_MS = new Date().getTime();
const formatTime = (time: number) => {
	if(time < 10)
		return `0${time}`
	return `${time}`
}

interface Props {
	time: number;
	finish: () => void;
}

let done = false; 

export const BreathingIndicator : React.FC<Props> = ({time, finish}) => {

	const ratio = useSharedValue<number>(0.05)

	const isInhaling = useSharedValue<boolean>(true)
	const [minutes, seconds] = useCountDown(time)

	React.useEffect(() => {
		// brething indecator circle animation !
		ratio.value = withRepeat(
			withDelay(1000, 
				withRepeat(
					withTiming(.78, {duration: 6800}, (finished, _) => {
						if(finished)
							isInhaling.value = !isInhaling.value	
					}), -1, true	
			)), -1, true)	
	}, [])

	const innerCircleStyle = useAnimatedStyle(() => {
		return {
			width: width * ratio.value,
			height: width * ratio.value
		}
	})

	if (minutes + seconds === 0 && !done){
		done = true;
		finish();
	}

	return (
		<View style={{flex: 1}}>
			<Text style={styles.countDown}>{isInhaling.value ? "inhale" : "exhale"}</Text>
			<Text style={styles.behavior}>{formatTime(minutes)}:{formatTime(seconds)}</Text>
			<View style={styles.container}>
				<View style={styles.circle}>
					<Animated.View style={[styles.innerCircle, innerCircleStyle]} />
				</View>
			</View>
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
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center'
	},
	innerCircle:{
		height: width * .75,
		width: width * .75,
		borderRadius: width * .8,
		backgroundColor: 'white'
	},
	countDown: {
		fontFamily: 'cooper',
		color: 'black',
		fontSize: 50,
		textAlign: 'center',
		marginTop: 20,
	},
	behavior: {
		fontFamily: 'cooper',
		fontSize: 30,
		textAlign: 'center',
		marginTop: 10,
		color: '#434343'
	}

})
