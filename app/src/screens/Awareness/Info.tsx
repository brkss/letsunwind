import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { snapPoint, useVector } from 'react-native-redash';
import { SharedElement } from 'react-navigation-shared-element';
import { AwarnessItem, genHtml } from '../../utils/data/awarness'
import { WebView } from 'react-native-webview' 

const { width, height } = Dimensions.get("window") 

export const Info : React.FC<any> = ({navigation, route}) => {

	const item  = route.params.item as AwarnessItem
	const isGestureActive = useSharedValue<boolean>(false)
	const translation = useVector()

	const onGestureEvent = useAnimatedGestureHandler({
		onStart: () => (isGestureActive.value = true),
		onActive: ({translationX, translationY}) => {
			translation.y.value = translationY
			translation.x.value = translationX
		},
		onEnd: ({translationY, velocityY}) => {
			const snapBack = snapPoint(translationY, velocityY, [0, height]) === height
			if(snapBack){
				runOnJS(navigation.goBack)()
			}else {
				isGestureActive.value = false;
				translation.x.value = withSpring(0)
				translation.y.value = withSpring(0)
			}
		}
	})

	const style = useAnimatedStyle(() => {
		const scale = interpolate(
			translation.y.value,
			[0, height],
			[1, .5],
			Extrapolate.CLAMP
		)
		return {
			transform: [
				{translateX: translation.x.value * scale},
				{translateY: translation.y.value * scale},
				{scale: scale}
			]
		}	
	});

	return (
		<PanGestureHandler onGestureEvent={onGestureEvent}>
			<Animated.View style={[style, {borderRadius: 40, flex: 1, backgroundColor: 'black'}]}>
				<View style={styles.container}>
					<View style={{height: 7, width: '50%', backgroundColor: 'white', borderRadius: 10, marginBottom: 10, alignSelf: 'center'}} />
					<ScrollView showsVerticalScrollIndicator={false}>
						<SharedElement id={`${item.id}-gradient`}>
							<LinearGradient  colors={[item.gradient[0], item.gradient[1]]} style={styles.card}>
							</LinearGradient>
						</SharedElement>
						<SharedElement id={`${item.id}-title`}>
							<Text style={styles.title}>{item.title}</Text>
						</SharedElement>
						<Text style={{color: 'white', fontSize: 16}}>{item.content}</Text>					
						{/*<WebView
							style={{backgroundColor: 'blue'}}
							automaticallyAdjustContentInsets
							originWhitelist={['*']}
							javaScriptEnabled
							scalesPageToFit
							source={{html: genHtml(item.content)}}
						/>*/}
					</ScrollView>
				</View>
			</Animated.View>
		</PanGestureHandler>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20	
	},
	card: {
		height: width - 40,
		width: width - 40,
		borderRadius: 30 
	},
	title: {
		color: 'white',
		fontFamily: 'cooper',
		fontSize: 30,
		marginTop: 30
	}	
})
