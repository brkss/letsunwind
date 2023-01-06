import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
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
	navigation: any
}

export const BreathingIndicator : React.FC<Props> = ({time, navigation}) => {

	const ratio = useSharedValue<number>(0.05)

	const [minutes, seconds] = useCountDown(time)
	

	React.useEffect(() => {
		ratio.value = withRepeat(withTiming(.78, {duration: 8000}, (finished, _) => {
			if(finished)
				console.log("finished animation ")
		}), -1, true)	
	}, [])

	const innerCircleStyle = useAnimatedStyle(() => {
		return {
			width: width * ratio.value,
			height: width * ratio.value
		}
	})

	if (minutes + seconds === 0)
		navigation.popToTop()

	return (
		<View style={{flex: 1}}>
			<Text style={styles.countDown}>{formatTime(minutes)}:{formatTime(seconds)}</Text>
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
	}
})
