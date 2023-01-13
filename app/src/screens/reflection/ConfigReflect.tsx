import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Pressable, Dimensions } from 'react-native';
import { Fluid, StartButton } from '../../components'
import Ionicons from '@expo/vector-icons/Ionicons'
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, interpolate, Extrapolate, withTiming, useAnimatedGestureHandler, runOnJS, withSpring } from 'react-native-reanimated'
import { useVector, snapPoint, opacity } from 'react-native-redash'
import { SharedElement } from 'react-navigation-shared-element';

const { height, width } = Dimensions.get('window')
const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

export const ConfigReflect : React.FC<any> = ({route, navigation}) => {

	const rot = useSharedValue<number>(0); 
	const isGestureActive = useSharedValue<boolean>(false);
	const translation = useVector()
	const  id  = route.params.id; 
	const [minutes, setMinutes] = React.useState(1);

	const onGestureEvent = useAnimatedGestureHandler({
		onStart: () => (isGestureActive.value = true),
		onActive: ({translationX, translationY, velocityY}) => {
			//console.log("gest : ", translationY)
			if (translationY > -(width / 3))
				translation.y.value = translationY
			translation.x.value = translationX
			if (translationY > height * .05){
				rot.value = withTiming(90, {duration: 400}) 
			}
		},
		onEnd: ({translationY, velocityY}) => {
			const snapBack = snapPoint(translationY, velocityY, [0, height]) === height;
			const snapUp = snapPoint(translationY, velocityY, [0, -height / 2]) === -height/2 
			if(snapUp){
				runOnJS(navigation.push)("Reflect", {minutes: minutes})
			}
			if (snapBack)
			{
				runOnJS(navigation.goBack)();
			}	
			else {
				isGestureActive.value = false;
				translation.x.value = withSpring(0);
				translation.y.value = withSpring(0);
				rot.value = withSpring(0);
			}
		},

	})

	const style = useAnimatedStyle(() => {
		const scale = interpolate(
			translation.y.value,
			[0, height],
			[1, 0.5],
			Extrapolate.CLAMP
		)
		return {
			flex:1 ,
			transform: [
				{ translateX: translation.x.value * scale },
				{ translateY: translation.y.value * scale },
				{ scale: scale}
			]
		}
	})

	const arrowStyle = useAnimatedStyle(() => {
		const rotationScale = interpolate(
			rot.value,
			[0, height],
			[0, 100],
			Extrapolate.CLAMP
		)
		return {
			transform: [
				{ rotate: `${rot.value}deg`}
			],
		}
	})

	return (
		<PanGestureHandler onGestureEvent={onGestureEvent}>
			<Animated.View style={[style, {backgroundColor: 'black'}]}>
						<View style={styles.container}>
							<View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 30}}>
								<AnimatedPressable onPress={() => navigation.goBack()} style={arrowStyle}>
									<SharedElement id={`${id}-arrow`}>
										<Ionicons name={'arrow-up-outline'} color={'white'} size={40} />
									</SharedElement>		
								</AnimatedPressable>
								<SharedElement id={`${id}-title`}>
									<Text style={styles.heading}>Reflection</Text>
								</SharedElement>
							</View>
							<Fluid onChange={(t) => setMinutes(t)} />
							<StartButton onPress={() => navigation.push('Reflect', {minutes: minutes})} />
						</View>
			</Animated.View>
		</PanGestureHandler>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	heading: {
		color: 'white',
		fontFamily: 'cooper',
		textAlign: 'center',
		fontSize: 30
	},
	txt: {
		color: 'white'
	}
})
